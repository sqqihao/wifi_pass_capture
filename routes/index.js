var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/[^post]/', function(req, res, next) {
  //res.redirect("index.html");
//});


router.post("/post",function(req, res, next){
  console.log(req.body);
  res.redirect("upgrading.html")
})

module.exports = router;
