const express = require(`express`);

const controller = require(`../controllers/controller.js`);
const SignUpcontroller = require(`../controllers/SignUpcontroller.js`);
const Admincontroller = require(`../controllers/Admincontroller.js`);
const Shopcontroller = require("../controllers/Shopcontroller.js");
const Searchcontroller = require("../controllers/Searchcontroller.js");

const app = express();

// middleware
app.get(['/edit_profile', '/my_cart'], controller.verifyUser);


// index
app.get(`/`, controller.getIndex);
app.get('/about', controller.getAbout);
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

//Shop
app.get('/my_cart', Shopcontroller.getMyCart);
app.get('/checkout', Shopcontroller.getCheckout);
app.get('/view_product', Shopcontroller.getProduct);
app.get('/comment', Shopcontroller.comment);
app.get('/comdel', Shopcontroller.commentdelete);
app.get('/addcart', Shopcontroller.addToCart);
app.post('/deletecart', Shopcontroller.deleteCart);

// Admin
app.get('/admin', Admincontroller.getAdmin);
app.get('/checkitemno', Admincontroller.getCheckItemNo);
app.get('/addprod', Admincontroller.getAddProd);
app.get('/editprod', Admincontroller.getEditProd);
app.get('/delprod', Admincontroller.getDelProd);
app.get('/deluser', Admincontroller.getDelUser);

//Search
app.get('/searchproducts', Searchcontroller.getCategory);
app.get('/searchresults', Searchcontroller.getSearch);
module.exports = app;
