var express = require('express');
var Router = express.Router();
var getDB = require('../db');
var dbtool = require('../dbtool');
var async = require("async");
var ObjectID = require("mongodb").ObjectID;

Router.get('/login', (req, res) => {
    res.send('这是vue项目的登录接口');
})

Router.post('/register', (req, res) => {
    var userInfo = req.body;
    getDB.conn((err, db) => {
        if (err) {
            res.send('数据库错误');
            db.close();
        } else {
            var user = db.collection('user');
            async.waterfall([
                function (callback) {
                    user.find({
                        username: userInfo.username
                    }).toArray((err, result) => {
                        if (err) throw err;
                        console.log(result);
                        if (result.length > 0) {
                            callback(null, true);
                        } else {
                            callback(null, false);
                        }
                    })
                },
                function (args, callback) {
                    if (!args) {
                        user.insert({
                            username: userInfo.username,
                            password: userInfo.pwd
                        }, function (err, result) {
                            if (err) throw err;
                            console.log(result);
                            callback(null, '1');
                        })
                    } else {
                        callback(null, '0');
                    }
                }
            ], function (err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            })
        }
    })
})

Router.get('/getMsg', (req, res) => {
    dbtool(function (db) {
        var moive = db.collection('movie');
        moive.find({}).limit(10).toArray((err, result) => {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})

Router.get('/scrollMore', (req, res) => {
    let { skipNum } = req.query;
    skipNum = skipNum * 1;
    dbtool(function (db) {
        var moive = db.collection('movie');
        moive.find({}).skip(skipNum).limit(10).toArray((err, result) => {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})
Router.get('/getHomeMv', (req, res) => {
    // collect_count
    // 降序：db.userInfo.find().sort({age: -1});
    dbtool(function (db) {
        var moive = db.collection('movie');
        moive.find({}).skip(0).limit(8).sort({collect_count: -1}).toArray((err, result) => {
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})

module.exports = Router;