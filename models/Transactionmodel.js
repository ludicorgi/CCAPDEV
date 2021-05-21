var mongoose = require('mongoose');
const Product = require('ProductModel.js');

var TransactionSchema = new mongoose.Schema({
    user: String,
    num : Number,
    products: [Product] 
});

module.exports = mongoose.model('Transaction', TransactionSchema);