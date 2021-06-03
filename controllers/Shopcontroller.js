const db = require('../models/db.js');
const Products = require('../models/Productmodel.js');

const Shopcontroller = {
    getMyCart: function(req, res){
        res.render('my_cart');
    },

    getCheckout: function(req, res){
        res.render('checkout');
    },

    getProduct: function(req, res){
        db.findOne(Products, req.query, null, function(result){
            res.render('view_product', result);
        });
    }
}
module.exports = Shopcontroller;
