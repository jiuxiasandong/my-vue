
var express = require("express");

var cookieParser = require('cookie-parser');   // 方便操作cookies
var bodyParser = require('body-parser');   //  获取 请求的参数   post

var app = express();

var host = "0.0.0.0";

var port = 2000;

app.use(bodyParser.json());    // 接口  http://localhost:7000/login?username=qwer  ajax  req.body 
app.use(bodyParser.urlencoded({ extended: false })); // form 表单提交 
app.use(cookieParser());

// 处理跨域方法 jsonp
app.all('*', function (req, res, next) {
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

//  配置路由文件   导出   index   

var vue = require("./vue");
var react = require("./react");

app.use("/vue", vue);   // use  使用中间键  
app.use("/react", react);

app.get("/", (req, res) => {
    res.send("node server is running...");
});

app.listen(port, host, () => {
    console.log(`node server is running at http://${host}:${port}`)
});