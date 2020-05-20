const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true,
        unique:true
    } , 
    password : {
        type:String,
        required:true,
    } , 
    name : {
        type:String,
        required:true
    },

    tasks : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Tasks"
        }
    ]
} , {
    timestamps : true
});


const Users = mongoose.model("Users" , userSchema);

module.exports = Users;