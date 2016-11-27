var crypto = require('crypto'),
    User = require('../modules/user.js');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Blog' });
});

router.get('/region', function(req, res, next) {
  res.render('region', { title: 'Blog' });
});

router.get('/blog',function (req,res,next) {
  res.render('blog',{title:'Blog'});
});

router.get('/post',function (req,res,next) {
  res.render('post',{title:'post'})
});

router.post('/region',function(req,res){
  var name = req.body.name,
      password = req.body.password,
      password_req = req.body['password-repeat'];

  if (user.password_re != user.password){
    req.flash('error','两次输入密码不一致');
  }

  var md5 = crypto.createHash('md5'),
      password = md5.update(req.body.password).digest('hex');
  var newU

});



module.exports = router;
