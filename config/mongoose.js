const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/task_manager_db");

const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error Connecting to Database"));

db.once("open" , function(){
    console.log("Successfully connected to Database");
});

module.exports = db;

