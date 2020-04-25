const express = require("express");
const port = 1000;
const app = express();
const db = require("./config/mongoose");


app.use("/" , require("./routes/index"));
app.use(express.static("./assets"));

app.set("view engine" , "ejs");
app.set("views" , "./views");

app.listen(port , function(error){
    if(error){
        console.log("Error in running the server");
        return;
    }

    console.log("Server is up and running on port" , port);
})