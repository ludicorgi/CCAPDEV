const db = require('../models/db.js');
const Product = require('../models/Productmodel');

const Productcontroller = {
    getProduct: function(req, res){

        var product = {
            itemNo: '1',
            name: 'three',
            company: 'foru',
            Quantity: 'five',
            Price: '67',
            tags: ['hello'],
            imgURL: 'nice',
            itemDesc: 'noisu',
        }

        db.insertOne(Product, product, function(inserted){
            console.log(inserted);
        })
        // Category.find({}, function(found){
        //     if(found)
        //         console.log(found);
        //     else
        //         console.log(found);
        // });

        // Category.find(function(err, categories){
        //     if(err) return console.log(err);
        //     else {
        //         console.log(err);
        //         console.log(categories);
        //     }
        //     res.render('categories', {categories : categories});
        // });
    },
}
module.exports = Productcontroller;