const db = require('../models/db.js');
const Profile = require('../models/ProfileModel.js');

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
    },

    getAddAcc: function(req, res) {
        var fn = req.query.fn;
        var ln = req.query.ln;
        var gender = req.query.gender;
        var email = req.query.email;
        var password = req.query.password;
        var ccNo = req.query.ccNo;
        var sNo = req.query.sNo;
        var ExpDate = req.query.ExpDate;
        var address = req.query.address;

        var profile = {
            fn:fn, 
            ln:ln, 
            gender:gender,
            email:email, 
            password:password, 
            ccNo:ccNo, sNo:sNo, 
            ExpDate:ExpDate, 
            address:address,

            imgURL:"https://www.w3schools.com/howto/img_avatar.png",
        }
        db.insertOne(Profile, profile, function(){});
    },
}
module.exports = SignUpcontroller;