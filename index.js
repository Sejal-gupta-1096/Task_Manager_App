const express = require("express");
const port = 1000;
const app = express();
const db = require("./config/mongoose");
const expressLayouts = require("express-ejs-layouts");


app.use(express.urlencoded());

app.use(expressLayouts);
app.set("layout extractStyles" ,true);
app.set("layout extractScripts" ,true);
app.use(express.static("./assets"));
app.set("view engine" , "ejs");
app.set("views" , "./views");

app.use("/" , require("./routes/index"));


app.listen(port , function(error){
    if(error){
        console.log("Error in running the server");
        return;
    }

    console.log("Server is up and running on port" , port);
})