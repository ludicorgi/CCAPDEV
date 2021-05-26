var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    rating: Number,
    user: String,
    desc: String
});

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



module.exports = mongoose.model('Products', ProductSchema);