const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const session = require('express-session');
const passport = require('passport');

const routes = require('./routes');
const dbconfig = require('./config/database');
const SwaggerConfiguration = require('./config/swagger');

const version = "1.0";
const port = 3000;

//Setup Mongo DB Connection
//docker run --name vital-mongodb -v d:\DB\MongoDB1:/var/lib/mongodb -p 27017:27017 -d bitnami/mongodb
mongoose.connect(dbconfig.database);
let db = mongoose.connection;
db.once('open',()=>console.log('Connected to MongoDB'));
db.on('error', (err) => console.log(err));

const app = express();

//Load View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');
//Body parser middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//Set public folder
app.use(express.static(path.join(__dirname,'public')));

//Express session middleware
app.use(session({
    secret:dbconfig.secret,
    resave:true,
    saveUninitialized: true
}));

require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());

//Express messages middlware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});
//Express validator 
app.use(validator());

//Setup Swagger 
SwaggerConfiguration.configureMiddleware(app);

app.use('/',routes);


console.log(`PlantSocial version ${version}`);
app.listen(port, ()=>{
    console.log(`Server started on port:${port}`);
})


