var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//增加新路由的方法
router.get('/hello',function(req,res,next){
    //json对象
    var obj = [{"_id":"50738ebbe3d87c6beaddb6f2","name":"tv","category":"tech","cost":"30"},{"_id":"50738ebbe3d87c6beaddb6f2","name":"tv1","category":"tech","cost":"30"}];
    res.render('listitem', { itemArray: obj});
});

router.get('/test',function (req,res,next) {
   res.render('list');
});

module.exports = router;
