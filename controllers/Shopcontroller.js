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

        Products.findOne({itemNo: itemNo}, function(err, result){
            var arr = result.reviews;
            
            arr.forEach(function(item){
                var user = item.user;
                var email = item.email;
                var rating = item.rating;
                var desc = item.desc;
                var id = item._id;
                
                if(user == req.query.user && email == req.query.email && rating == req.query.rating && desc == req.query.comment ){
                    db.updateOne(Products, {itemNo: itemNo},  { $pull:{reviews: {_id: id}} }, function(){});
                    res.send("successful delete");
                }
            });
        });
    }
}
module.exports = Shopcontroller;
