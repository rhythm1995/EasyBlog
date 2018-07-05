var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 基本信息
router.get('/getUserList', function (req, res, next) {
    // 从连接池获取连接
    pool
        .getConnection(function (err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接 查询基本信息
            connection.query("SELECT * FROM user", function (err, result) {
                if (err) {
                    res.json(500);
                } else {
                    res.json(result);
                }

                // 释放连接
                connection.release();

            });
        });
});

// 基本信息
router.get('/getWorkList', function (req, res, next) {
    // 从连接池获取连接
    pool
        .getConnection(function (err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接 查询工作信息
            connection.query("SELECT * FROM work", function (err, result) {
                if (err) {
                    res.json(500);
                } else {
                    res.json(result);
                }

                // 释放连接
                connection.release();

            });
        });
});

// 奖励信息
router.get('/getprizeList', function (req, res, next) {
    // 从连接池获取连接
    pool
        .getConnection(function (err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接 查询工作信息
            connection.query("SELECT * FROM prize", function (err, result) {
                if (err) {
                    res.json(500);
                } else {
                    res.json(result);
                }

                // 释放连接
                connection.release();

            });
        });
});



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});



module.exports = router;