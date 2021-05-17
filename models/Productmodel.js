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
});

module.exports = mongoose.model('Product', ProductSchema);