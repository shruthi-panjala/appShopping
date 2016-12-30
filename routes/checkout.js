var express = require('express');
var router = express.Router();
//var app=express();
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('checkout', { title: "about online" ,
                      layout: "noFooter"
                      });

});

module.exports = router;
