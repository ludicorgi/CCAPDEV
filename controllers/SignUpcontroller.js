const db = require('../models/db.js');
//const Profile = require('../models/ProfileModel.js');

const SignUpcontroller = {
    getLogin: function(req, res){
        res.render('login');
    },

    getRegister: function(req, res){
        res.render('register');
    },

    getMyAccount: function(req, res){

        var profile = {
            fn: "First",
            ln: "Last",
            gender: "Male",
            email: "@",
            password: "...",
            imgURL: "https://www.w3schools.com/howto/img_avatar.png",
            ccNo: "111",
            sNo: "111",
            ExpDate: "01/01/2000",
            address: "..."
        }

        res.render('edit_profile', profile);
    }
}
module.exports = SignUpcontroller;