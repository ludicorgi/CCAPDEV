

const controller = {
    getIndex: function(req, res) {
        res.render('index');
    },

    getLogin: function(req, res){
        res.render('login');
    }
}

module.exports = controller;