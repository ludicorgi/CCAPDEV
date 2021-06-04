const Profile = require('../models/Profilemodel.js');
const Products = require('../models/Productmodel.js');
const db = require('../models/db.js');

const controller = {
    getIndex: function(req, res) {
        const pattern = new RegExp('', 'i');
        Products.find({$or:[{tags:{$regex : pattern}},{ name:{$regex : pattern}}]}, function(err, results){
            results.length = 4;
            console.log(results);
            if(err)
                res.render('index');
            else
                res.render('index', {products: results, title : ''});
        });
        
    },

    getAbout: function(req, res){
        res.render('about');
    },

    getSession: function(req, res){
        Profile.findOne({email: req.session.email}, function (err, result){
            res.send(result);
        });
    },

    verifyUser: function (req, res, next) {
        if (req.session && req.session.email) {
            next();
        } else {
            // TODO: forward to page 404 or whatever
            res.render('error404');
        }
    },
};

module.exports = controller;