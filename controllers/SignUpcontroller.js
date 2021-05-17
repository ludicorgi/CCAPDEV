
const SignUpcontroller = {
    getLogin: function(req, res){
        res.render('login');
    },

    getRegister: function(req, res){
        res.render('register');
    },

    getMyAccount: function(req, res){

        

        res.render('edit_profile');
    }
}
module.exports = SignUpcontroller;