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
            user: req.query.user,
            email: req.query.email,
            rating: req.query.rating,
            desc: req.query.comment
        };
        db.updateOne(Products, {itemNo: itemNo}, { $push:{reviews: review} }, function(){});
    },

    commentdelete: function(req, res){
        var itemNo = req.query.itemNo;
        var review = {
            user: req.query.user,
            email: req.query.email,
            rating: req.query.rating,
            desc: req.query.comment
        };
        console.log("111");
        db.updateOne(Products, {itemNo: itemNo},  { $pull:{reviews: {$in: review}} }, function(){});
    }
}
module.exports = Shopcontroller;
