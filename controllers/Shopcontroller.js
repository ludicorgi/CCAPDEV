const db = require('../models/db.js');
const Products = require('../models/Productmodel.js');

const Shopcontroller = {
    getMyCart: function(req, res){
        res.render('my_cart');
    },

    getProduct: function(req, res){
        db.findOne(Products, req.query, null, function(result){
            res.render('view_product', result);
        });
    },

   comment: function(req, res){
        var itemNo = req.query.itemNo;
        var review = {
            user: req.user,
            email: req.email,
            rating: req.rating,
            desc: req.comment
        };

        //db.updateOne(Products, {itemNo: itemNo}, { $push:{reviews: review} }, function(){});
   }
}
module.exports = Shopcontroller;
