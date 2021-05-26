var mongoose = require('mongoose');
var Products = require('./Productmodel.js');

var TransactionSchema = new mongoose.Schema({
    user: String,
    num : Number,
    products: [Products.schema] 
});

module.exports = mongoose.model('Transaction', TransactionSchema);