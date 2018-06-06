var express = require('express');
var Router = express.Router();
var getDB = require("../db");
var async = require("async");
var ObjectID = require("mongodb").ObjectID;

Router.get('/login', (req, res) => {
    res.send("222");
})

Router.post("/register", (req, res) => {
    // console.log(req.body);
    var data = req.body;
    getDB.conn((err, db) => {
        if (err) {
            console.log("数据库错误");
            db.close();
        } else {
            var user = db.collection("user");
            user.insert(data, (err, result) => {
                if (err) {
                    console.log("数据库错误");
                    db.close();
                } else {
                    res.send("注册成功");
                    db.close();
                }
            })
        }
    })
})

Router.get("/sendMsg", (req, res) => {
    // console.log(req.query);
    var data = req.query;
    getDB.conn((err, db) => {
        if (err) {
            console.log("数据库错误");
            db.close();
        } else {
            var message = db.collection("message");
            async.series([
                function (callback) {
                    message.insert(data, (err, result) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, "1")
                        }
                    })
                },
                function (callback) {
                    message.find({}, {}).toArray((err, result) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, result);
                        }
                    })
                }
            ], function (err, result) {
                // ['1',result]
                if (err) {
                    res.send("数据库错误");
                    db.close()
                } else {
                    res.json(result);
                    db.close()
                }
            })
        }
    })
})

// 获取所有的 评论  
Router.get("/getMsg", (req, res) => {
    getDB.conn((err, db) => {
        if (err) {
            console.log("数据库错误");
            db.close();
        } else {
            var message = db.collection("message");
            message.find().toArray((err, result) => {
                if (err) {
                    console.log("数据库错误");
                    db.close();
                } else {
                    res.send(result);
                    db.close();
                }
            })
        }
    })
})

Router.get("/deletecomments",(req,res)=>{
    // console.log(req.query);

    var _id = req.query.id;

    getDB.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
            db.close()
        }else{
            var message = db.collection("message");
            async.series([
                function(callback){
                    message.remove({_id:ObjectID.createFromHexString(_id)},function(err,result){
                        if(err){
                            callback(err,null)
                        }else{
                            callback(null,"1")
                        }
                    })
                },
                function(callback){
                    message.find({},{}).toArray((err,result)=>{
                        if(err){
                            callback(err,null);
                        }else{
                            callback(null,result);
                        }
                    })
                }],
                function(err,result){
                    if(err){
                        res.send("数据库错误");
                        db.close();
                    }else{
                        res.json(result);
                        db.close();
                    }
            })
        }
    });
})



module.exports = Router;