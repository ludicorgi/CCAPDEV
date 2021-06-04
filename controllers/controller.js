const Profile = require('../models/Profilemodel.js');

const controller = {
    getIndex: function(req, res) {
        res.render('index');
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
        }
    },
};

module.exports = controller;