const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require(`./routes/routes.js`);
const db = require(`./models/db.js`);
const hbs = require(`hbs`);
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongodb-session')(session);


dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;
dbUri = process.env.DB_URL;
db.connect();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

const store = new mongoStore({
    uri: dbUri,
    databaseName: 'ShoppingApp',
    collection: 'session'
});

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

app.use(express.static('public'));


app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    rolling: true,     
    cookie: {
        maxAge: 12096e5
    },
    store: store
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use(`/`, routes);
app.listen(port, function(){
    console.log(`Server running at:`);
    console.log(`http://` + hostname + `:` + port);
});
