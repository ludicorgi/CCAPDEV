var mongoose = require('mongoose');
var Transaction = require('./Transactionmodel.js');

var ProfileSchema = new mongoose.Schema({
    fn: String,
    ln: String,
    gender: String,
    email: String,
    password: String,
    imgURL: String,
    ccNo: Number,
    sNo: Number,
    ExpDate: Date,
    address: String,
    cart: [Transaction]
});

module.exports = mongoose.model('Profile', ProfileSchema);