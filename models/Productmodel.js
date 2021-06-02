var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    rating: Number,
    user: String,
    desc: String
});

var ProductSchema = new mongoose.Schema({
    itemNo: {type: Number, require: true},
    name: {type: String, require: true},
    company: {type: String, require: false},
    Quantity: {type: Number, require: true},
    Price: {type: Number, require: true},
    tags: [String],
    imgURL: {type: String, require: false},
    itemDesc: {type: String, require: false},
    rating: {type: Number, require: false},
    reviews: [reviewSchema]
});



module.exports = mongoose.model('Products', ProductSchema);