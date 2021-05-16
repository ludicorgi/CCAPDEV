const express = require(`express`);

const controller = require(`../controllers/controller.js`);
const SignUpcontroller = require(`../controllers/SignUpcontroller.js`);

const app = express();

app.get(`/`, controller.getIndex);
app.get(`/login`, SignUpcontroller.getLogin);
app.get(`/register`, SignUpcontroller.getRegister);

module.exports = app;