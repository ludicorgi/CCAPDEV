const express = require(`express`);

const controller = require(`../controllers/controller.js`);
const SignUpcontroller = require(`../controllers/SignUpcontroller.js`);
const Admincontroller = require(`../controllers/Admincontroller.js`);
const Productcontroller = require(`../controllers/Productcontroller.js`);
const app = express();

// index
app.get(`/`, controller.getIndex);

// Signup
app.get(`/login`, SignUpcontroller.getLogin);
app.get(`/register`, SignUpcontroller.getRegister);
app.get('/edit_profile', SignUpcontroller.getMyAccount);

// Admin
app.get('/admin', Admincontroller.getAdmin);

// Products
app.get('/products', Productcontroller.getProduct);

module.exports = app;