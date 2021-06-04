const db = require('../models/db.js');
const Products = require('../models/Productmodel.js');
const Profile = require('../models/Profilemodel.js');
const async = require('async');

const Shopcontroller = {
    getMyCart: function(req, res) {
        let total = 0;

        async.waterfall([
            function findUser(callback) {
                Profile.findOne({email: req.session.email}, function (err, result) {
                    if (!result) {
                        callback('USER NOT FOUND');
                    } else {
                        callback(err, result);
                    }
                });
            },

            function getItems(user, callback) {
                var arr = [];

                async.forEach(user.cart, function(item, callback) {
                    var product = item.product;
                    var quantity = item.quantity;
                    
                    Products.find({ itemNo: product }, function(err, resultProduct) {
                        var temp = resultProduct[0];
                        temp.Quantity = quantity

                        temp.total = temp.Quantity * temp.Price;
                        total += temp.total;

                        arr.push(temp);
                        callback(err);
                    }).lean();

                }, (err) => {
                    callback(err, arr);
                });
            }
        ], (err, products) => {
            if (err) {
                console.log(err);
                res.redirect('/');
            } else {
                res.render('my_cart',  {
                    products,
                    total: total.toFixed(2),
                });
            }
        });
    },

    addToCart: function(req, res){
        var email = req.query.email;
        var cart = {
            product : req.query.itemNo,
            quantity : req.query.quantity
        }
        var productID = req.query.itemNo;
        var quantity = req.query.quantity;
        console.log(productID);
        var oldquantity;
        Profile.find({email: email, "cart.product": productID}, function(err, found){
            if(found.length){
                db.findOne(Profile,{email: email, "cart.product": productID},'cart.product cart.quantity', function(result){
                    result.cart.every(function(item){
                        if(item.product == productID){
                            oldquantity = item.quantity;
                            return false;
                        }
                        return true;
                    })
                    var newquantity = parseInt(oldquantity) + parseInt(quantity);
                    //TODO: if it overflows from max value
                    db.updateOne(Profile,{email: email}, {$pull: {cart : {product: productID}}}, function(result){
                        console.log(result);
                    });
                    cart.quantity = newquantity;
                    db.updateOne(Profile,{email: email}, {$push: {cart : cart}}, function(result){
                    });
                });
            }
            else{
                db.updateOne(Profile,{email: email}, {$push: {cart : cart}}, function(result){
                    console.log(result);
                });
            }
        }); 
    },

    deleteCart: function(req, res){
        Profile.updateOne( {email: req.session.email}, { $pull: {cart: {product : req.body.id }} }, function(err, result){
        } )
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
        });}
    
}
module.exports = Shopcontroller;
