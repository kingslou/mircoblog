var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'+req.query.id);
});
/*传递参数的get           */
router.get('/:name',function (req,res,next) {
    res.send(req.params.name);
});

module.exports = router;
