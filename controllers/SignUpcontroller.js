const db = require('../models/db.js');
const Profile = require('../models/ProfileModel.js');
const render = require('../routes/routes.js');

const SignUpcontroller = {
    getLogin: function(req, res){
        res.render('login');
    },

    getLogAcc: function(req, res){
        var email = req.query.email;
        var password = req.query.password;
        var ss = req.session;

        Profile.findOne({email: email, password: password}, function (err, result){
            if(result != undefined)
                ss.email = result.email;
            res.send(result);
        });
    },

    getRegister: function(req, res){
        res.render('register');
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

    getCheckEmail: function(req, res) {
        var email = req.query.email;

        Profile.findOne({email: email}, function (err, result){
            res.send(result);
        });
    },

    getEditProfile: function(req, res){

        Profile.findOne({email: req.session.email}, function (err, result){
            if(result == null)
                res.redirect('/');
            else{
                var profile = {
                fn: result.fn,
                ln: result.ln,
                gender: result.gender,
                email: result.email,
                password: result.password,
                imgURL: result.imgURL,
                ccNo: result.ccNo,
                sNo: result.sNo,
                ExpDate: result.ExpDate,
                address: result.address
                }
                res.render('edit_profile', profile);
            }
            
        });
    },

    getEditDetails: function(req, res){

        db.updateOne(Profile, {email: req.session.email} ,
        { 
            fn: req.query.fn,
            ln: req.query.ln,
            gender: req.query.gender,
            password: req.query.password,
            ccNo: req.query.ccNo,
            sNo: req.query.sNo,
            ExpDate: req.query.ExpDate,
            address: req.query.address,
            imgURL: req.query.imgURL

        }, function(){});
    },

    Logout: function(req, res){
        req.session.destroy();
        res.render('index');
    }
}
module.exports = SignUpcontroller;