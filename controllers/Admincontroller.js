const db = require('../models/db.js');
const Profile = require('../models/Profilemodel.js');
const Products = require('../models/Productmodel.js');


const Admincontroller = {
    getAdmin: function(req, res) {
        var users, products;
        
        Profile.find({}).exec(function(err,result) {
            users = result;
            Products.find({}).exec(function(err,result) {
                products = result;
                res.render('admin', {users: users, products: products});
            });
        });
    },

    getCheckItemNo: function(req, res) {
        var itemNo = req.query.itemNo;

        db.findOne(Products, {itemNo: itemNo}, 'itemNo', function(result) {
            res.send(result);
        });
    },

    getAddProd: function(req, res) {
        var itemno = req.query.itemno;
        var prodname = req.query.prodname;
        var company = req.query.company;
        var qty = req.query.qty;
        var price = req.query.price;
        var tags = req.query.tags;
        var splitags = tags.split(" ");
        var imgurl = req.query.imgurl;
        var itemdesc = req.query.itemdesc;
        var rating;
        
        var product = {
            itemNo: itemno,
            name: prodname,
            company: company,
            Quantity: qty,
            Price: price,
            tags: splitags,
            imgURL: imgurl,
            itemDesc: itemdesc,
            rating: 0
        }
        console.log(product);    

        db.insertOne(Products, product, function(){});
    },

    getEditProd: function(req, res) {
        db.updateOne(Products, {itemNo: req.query.itemno} ,
        { 
            name: req.query.prodname,
            company: req.query.company,
            Quantity: req.query.qty,
            Price: req.query.price,
            tags: req.query.tags,
            imgURL: req.query.imgurl,
            itemDesc: req.query.itemdesc,
        }, function(){});
    },

    getDelProd: function (req, res) {
        db.deleteOne(Products, req.query, function() {});
    },

    getDelUser: function(req, res){
        db.deleteOne(Profile, req.query, function() {});
    }

}
module.exports = Admincontroller;
