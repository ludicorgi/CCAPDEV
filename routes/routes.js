const express = require(`express`);

const controller = require(`../controllers/controller.js`);
const SignUpcontroller = require(`../controllers/SignUpcontroller.js`);
const Admincontroller = require(`../controllers/Admincontroller.js`);
const Shopcontroller = require("../controllers/Shopcontroller.js");

const app = express();

app.get(`/`, controller.getIndex);
app.get(`/login`, SignUpcontroller.getLogin);

app.get(`/register`, SignUpcontroller.getRegister);
app.get('/regAcc', SignUpcontroller.getAddAcc);


app.get('/edit_profile', SignUpcontroller.getMyAccount);
app.get('/admin', Admincontroller.getAdmin);
app.get('/my_cart', Shopcontroller.getMyCart);
app.get('/view_product', Shopcontroller.getProduct);


module.exports = app;