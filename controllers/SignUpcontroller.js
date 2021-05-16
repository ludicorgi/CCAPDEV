
const SignUpcontroller = {
    getLogin: function(req, res){
        res.render('login');
    },

    getRegister: function(req, res){
        res.render('register');
    }
}
module.exports = SignUpcontroller;