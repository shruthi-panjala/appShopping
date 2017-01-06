var express = require('express');
var router = express.Router();
var mongojs= require('mongojs');
var db = mongojs('shop', ['products']);
router.post('/wishlist', function(req, res) {
    
    var quote = req.body.quote;
    var collection = req.db.get('quotes');
    collection.insert({"quote": quote}, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("/index"); // works with or without preceding slash
        }
    });
});