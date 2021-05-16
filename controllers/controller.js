

const controller = {
    getIndex: function(req, res) {
        res.render('index');
    },

    getLogin: function(req, res){
        console.log('heyy');
        res.render('login');
    }
}

module.exports = controller;