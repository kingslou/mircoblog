var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//增加新路由的方法
router.get('/hello',function(req,res,next){
    res.render('index', { title: new Date() });
});

module.exports = router;
