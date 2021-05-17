var mongoose = require('mongoose');
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
    address: String
});

module.exports = mongoose.model('Profile', ProfileSchema);