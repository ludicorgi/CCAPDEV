const db = require('../models/db.js');
//const Product = require('../models/ProductModel.js');

const Shopcontroller = {
    getMyCart: function(req, res){
        res.render('my_cart');
    },

    getProduct: function(req, res){

        var product = {
            itemNo: "000",
            name: "ProdName",
            company: "CompanyName",
            Quantity: "99",
            Price: "109.80",
            tags: ["Tag1", "Tag2", "Tag3"],
            imgURL: "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/003/850/original/bag.png",
            itemDesc: "Description...................................................................................",
            rating: 4
        }

        res.render('view_product', product);
    }
}
module.exports = Shopcontroller;
