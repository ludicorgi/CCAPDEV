const dotenv = require('dotenv');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require(`./routes/routes.js`);
const db = require(`./models/db.js`);
const hbs = require(`hbs`);

db.connect();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}))

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

app.use(express.static('public'));
app.use(`/`, routes);

app.listen(port, hostname, function(){
    console.log(`Server running at:`);
    console.log(`http://` + hostname + `:` + port);
});