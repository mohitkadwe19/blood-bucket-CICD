require('dotenv').config();
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
var express = require('express')
var app = express()
const PORT = process.env.PORT
var session = require('express-session')
var cors = require('cors')
const path = require('path')
const hbs = require('hbs')
var morgan = require('morgan')
var http = require('http')
const MongoStore = require('connect-mongo');
var createError = require('http-errors')
var favicon = require('serve-favicon')

// connect to  database  
require('./db/conn')

app.use(favicon(path.join(__dirname, '../public/uploads/2019/04', 'favicon.ico')))


// file path 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

// set local static path
app.use(express.static(static_path));

//! set Template engine
app.set("view engine", "hbs");
app.set("views", template_path);
app.use(cors());
hbs.registerPartials(partial_path);


//live reload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(static_path);
liveReloadServer.watch(template_path);
liveReloadServer.watch(partial_path);


//middleware function
app.use(connectLiveReload())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
// app.use(cors())
app.set('trust proxy', 1)
app.use(session({
    name: "session-id",
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collection: "sessions"
    }),
}))


// live reload
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});;


app.use(require('./routes/userRoutes'))
app.use(require('./routes/adminRoutes'))
app.use(require('./routes/hospitalRoutes'))



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// catch 404 and forward to error handler
app.get('*', (req, res, next) => {
    res.status(404).render('404');
})




// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


// create server instance
const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

