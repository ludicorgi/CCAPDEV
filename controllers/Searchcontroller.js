const db = require('../models/db.js');
const Products = require('../models/Productmodel.js');


const Searchcontroller = {
    getCategory: function(req, res) {
        Products.find(req.query, function(err, result){
            res.render('search_prod', {products: result, title : req.query.tags});
            
        });},

    getSearch: function(req, res) {
        const key = req.query.tags;
        if(key){
            const pattern = new RegExp(key, 'i');
            Products.find({$or:[{tags:{$regex : pattern}},{ name:{$regex : pattern}}]}, function(err, results){
                res.render('search_prod', {products: results, title : key});
            });
        }
    },
}
module.exports = Searchcontroller;
