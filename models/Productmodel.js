var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    itemNo: Number,
    name: String,
    company: String,
    Quantity: String,
    Price: Number,
    tags: [String],
    imgURL: String,
    itemDesc: String,
    rating: Number,
    reviews: [reviewSchema]
});

var reviewSchema = new mongoose.Schema({
    rating: Number,
    user: String,
    desc: String
});

module.exports = mongoose.model('Products', ProductSchema);