const Profile = require('../models/ProfileModel.js');

const controller = {
    getIndex: function(req, res) {
        res.render('index');
    },

    getSession: function(req, res){
        Profile.findOne({email: req.session.email}, function (err, result){
            res.send(result);
        });
    }
}
module.exports = controller;