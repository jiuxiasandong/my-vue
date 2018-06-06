var express = require('express');
var getDB = require('../db');

module.exports = function (callback) {
    getDB.conn((err, db) => {
        if (err) {
            res.send('数据库错误');
            db.close();
        } else {
            callback(db)
        }
    })
}