const express = require("express");
const port = 1000;
const app = express();

const db = require("./config/mongoose");

const expressLayouts = require("express-ejs-layouts");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const passportGoogle = require("./config/passport-google-oauth2-strategy");
const MongoStore = require("connect-mongo")(session);

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));
app.use("/uploads" , express.static(__dirname + "/uploads"));
app.use(expressLayouts);
app.set('layout', 'layoutsA', 'layoutsB');
app.set("layout extractStyles" ,true);
app.set("layout extractScripts" ,true);
app.set("view engine" , "ejs");
app.set("views" , "./views");

app.use(session({
    name : "task_manager",
    secret : "secretkeyforencryptiongsessionid" , 
    saveUninitialized : false,
    resave : false , 
    cookie : {
        maxAge : (1000 * 60 * 100)
    } , 
    store : new MongoStore({
        mongooseConnection : db,
        autoRemove : 'disabled'
    } , function(error){
        console.log("Unable to store session cookie in database");
    })
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use("/" , require("./routes/index"));


app.listen(port , function(error){
    if(error){
        console.log("Error in running the server");
        return;
    }

    console.log("Server is up and running on port" , port);
})