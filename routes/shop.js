var express = require('express');
var router = express.Router();
var mongojs= require('mongojs');
var db = mongojs('shop', ['products']);
    var Cart=require('../models/cart');                      
                          
                          
                          
//var app=express();
/* GET users listing. */
router.get('/', function(req, res, next) {
  //fetching data from models folder............
    db.products.find(function(err, docs){
       
        var productChunks=[];
        var chunkSize=3;
        for(var i=0; i < docs.length; i+=chunkSize){
            productChunks.push(docs.slice(i, i+chunkSize));
            
        }
         res.render('shop', { title: 'Shop Online', layout: "other",
                         products: productChunks
                            
                      
                      });
        
       // res.json(docs);
    });
   
    
});
/*router.get('/addToCart/:id', function(req,res, next){
   var productId=req.params.id;
    var cart=new Cart(req.session.cart ? req.session.cart:{});
db.products.findById(productId, function(err, product){
    if(err){
        return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart= cart;
    console.log(req.session.cart);
    res.redirect('/');
    
});
});*/


module.exports = router;
