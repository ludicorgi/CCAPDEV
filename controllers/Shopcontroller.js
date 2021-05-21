const db = require('../models/db.js');
//const Profile = require('../models/ProductModel.js');

const Shopcontroller = {
    getMyCart: function(req, res){
        res.render('my_cart');
    }
}
module.exports = Shopcontroller;
