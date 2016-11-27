var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

module.exports = User;

//存储用户信息
User.prototype.save = function (callback) {
    //写入数据库的用户文档
    var user = {
        'name':this.name,
        'password':this.password,
        'email':this.email
    };
    //打开数据库
    mongodb.open(function (err,db) {
        if(err){
            return callback(err);
        }
        //读取user集合
        db.collection('users', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);//错误，返回 err 信息
            }
            //将用户数据插入 users 集合
            collection.insert(user, {
                safe: true
            }, function (err, user) {
                mongodb.close();
                if (err) {
                    return callback(err);//错误，返回 err 信息
                }
                callback(null, user[0]);//成功！err 为 null，并返回存储后的用户文档
            });
        });
    });
};