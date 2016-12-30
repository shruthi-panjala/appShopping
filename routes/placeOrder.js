var express = require('express');
var router = express.Router();
//var app=express();
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('placeOrder', { title: "Place Order" ,
                      layout: "other"
                      });

});

module.exports = router;
