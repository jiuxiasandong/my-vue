// 封装  文件 负责连接数据库  
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var CONN_DB_STR = 'mongodb://localhost:27017/roy';

module.exports = {
    conn: function (callback) {
        MongoClient.connect(CONN_DB_STR, (err, db) => {
            if (err) {
                console.log('数据库连接错误');
                callback(err, null);
            } else {
                console.log('数据库连接成功');
                callback(null, db);
            }
        })
    }
}