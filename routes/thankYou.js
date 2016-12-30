var express = require('express');
var router = express.Router();
//var app=express();
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('thankYou', { title: "Success" ,
                      layout: "noFooter"
                      });

});

module.exports = router;