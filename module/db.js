/**
 * Created by bugzhang on 2016/11/27.
 */
var setting = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(setting.db,new Server(setting.host,setting.port),{safe:ture});