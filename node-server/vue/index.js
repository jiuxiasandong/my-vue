var express = require('express');
var Router = express.Router();
var getDB = require('../db');
var dbtool = require('../dbtool');
var async = require("async");
var ObjectID = require("mongodb").ObjectID;
var descend = require("../utils/descend");

Router.post('/login', (req, res) => {
    const { account, password } = req.body;
    dbtool(function (db) {
        var users = db.collection('users');
        async.waterfall([
            function (callback) {
                users.find({ account: account }).toArray((err, result) => {
                    if (err) throw err;
                    if (result.length > 0) {
                        callback(null, result);
                    } else {
                        callback(null, 0);
                    }
                })
            },
            function (args, callback) {
                if (args == 0) {
                    callback(null, { code: 0, nickname: "" });
                } else {
                    if (password == args[0].password) {
                        callback(null, { nickname: args[0].nickname });
                    } else {
                        callback(null, { code: 1, nickname: "" });
                    }
                }
            }
        ], function (err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})

Router.post('/register', (req, res) => {
    const { account, password, nickname } = req.body;
    dbtool(function (db) {
        var users = db.collection('users');
        async.waterfall([
            function (callback) {
                users.find({ account: account }).toArray((err, result) => {
                    if (err) throw err;
                    if (result.length > 0) {
                        callback(null, true);
                    } else {
                        callback(null, false);
                    }
                })
            },
            function (args, callback) {
                if (!args) {
                    users.insert({ account: account, password: password, nickname: nickname }, function (err, result) {
                        if (err) throw err;
                        callback(null, 1);
                    })
                } else {
                    callback(null, 0);
                }
            }
        ], function (err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})

Router.get('/scrollTop', (req, res) => {
    const { currentTab, start, end } = req.query;
    dbtool(function (db) {
        if (currentTab == "Hot") {
            var mv = db.collection('hotmv');
        } else {
            var mv = db.collection('soonmv');
        }
        mv.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].subjects.reverse().slice(start, end));
        })
    })
})

Router.get('/scrollBtm', (req, res) => {
    const { currentTab, start, end } = req.query;
    dbtool(function (db) {
        if (currentTab == "Hot") {
            var mv = db.collection('hotmv');
        } else {
            var mv = db.collection('soonmv');
        }
        mv.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].subjects.slice(start, end));
        })
    })
})

Router.get('/getHomeHotMv', (req, res) => {
    dbtool(function (db) {
        var hotmv = db.collection('hotmv');
        hotmv.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].subjects.slice(0, 5));
            db.close();
        })
    })
})
Router.get('/getHomeSoonMv', (req, res) => {
    dbtool(function (db) {
        var soonmv = db.collection('soonmv');
        soonmv.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].subjects.slice(0, 5));
            db.close();
        })
    })
})
Router.get('/getRankMv', (req, res) => {
    dbtool(function (db) {
        async.series({
            top250: function (callback) {
                var top250 = db.collection('top250');
                top250.find({}).toArray((err, result) => {
                    if (err) throw err;
                    result = result[0].subjects.slice(0, 4);
                    callback(null, result);
                })
            },
            usa: function (callback) {
                var usa = db.collection('usa');
                usa.find({}).skip(0).limit(4).toArray((err, result) => {
                    if (err) throw err;
                    result = result[0].subjects.slice(0, 4);
                    callback(null, result);
                })
            }
        }, function (err, result) {
            if (err) throw err;
            res.json(result);
            console.log(result)
            db.close();
        })
    })
})

Router.get('/getFindHotMv', (req, res) => {
    dbtool(function (db) {
        var hotmv = db.collection('hotmv');
        hotmv.find({}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].subjects.sort(descend('collect_count')));
            db.close();
        })
    })
})

Router.get('/getFindHotTv', (req, res) => {
    dbtool(function (db) {
        async.series({
            cntv: function (callback) {
                var cntv = db.collection('soonmv');
                cntv.find({}).toArray((err, result) => {
                    if (err) throw err;
                    callback(null, result[0].subjects.sort(descend('collect_count')));
                })
            },
            usatv: function (callback) {
                var usatv = db.collection('usa');
                usatv.find({}).toArray((err, result) => {
                    if (err) throw err;
                    callback(null, result[0].subjects.sort(descend('collect_count')));
                })
            }
        }, function (err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})

Router.get('/getDescById', (req, res) => {
    const { id } = req.query;
    dbtool(function (db) {
        var mv = db.collection('allmv');
        mv.find({ id: id }).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0]);
        })
    })
})
Router.get('/getSearchMv', (req, res) => {
    const { keyword } = req.query;
    dbtool(function (db) {
        var mv = db.collection('allmv');
        const reg = { $regex: keyword, $options: "$i" };
        mv.find({
            $or: [
                { title: reg },
                { year: reg },
                { subtype: reg }
            ]
        }).toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        })
    })
})
Router.post('/pushUserMv', (req, res) => {
    const { nickname, mvInfo } = req.body;
    console.log(req.body);
    dbtool(function (db) {
        var users = db.collection('users');
        users.update({ nickname: nickname }, { $set: { mvInfo: mvInfo } }, function (err, result) {
            if (err) throw err;
            res.json({ code: 1, mvInfo });
        })
    })
})

module.exports = Router;