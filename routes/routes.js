const express = require(`express`);

const controller = require(`../controllers/controller.js`);
const SignUpcontroller = require(`../controllers/SignUpcontroller.js`);
const Admincontroller = require(`../controllers/Admincontroller.js`);
const Shopcontroller = require("../controllers/Shopcontroller.js");

const app = express();

// index
app.get(`/`, controller.getIndex);
app.get('/session', controller.getSession);

// Signup
app.get(`/login`, SignUpcontroller.getLogin);
app.get('/logAcc', SignUpcontroller.getLogAcc);

app.get(`/register`, SignUpcontroller.getRegister);
app.get('/regAcc', SignUpcontroller.getAddAcc);
app.get('/regEmail', SignUpcontroller.getCheckEmail);

app.get('/edit_profile', SignUpcontroller.getEditProfile);
app.get('/editdetails', SignUpcontroller.getEditDetails);
app.get('/logout', SignUpcontroller.Logout);

app.get('/my_cart', Shopcontroller.getMyCart);
app.get('/view_product', Shopcontroller.getProduct);

// Admin
app.get('/admin', Admincontroller.getAdmin);
app.get('/checkitemno', Admincontroller.getCheckItemNo);
app.get('/addprod', Admincontroller.getAddProd);
app.get('/editprod', Admincontroller.getEditProd);
app.get('/delprod', Admincontroller.getDelProd);

module.exports = app;
