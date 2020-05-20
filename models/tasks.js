const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({

    title : {
        type : String,
        required : true
    } , 
    description:{
        type : String,
        required : true
    } ,
    category : {
        type : String,
        required : true
    } , 
    date : {
        type : String,
        required : true
    } , 

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    }
});

const Tasks = mongoose.model("Tasks" , taskSchema);

module.exports = Tasks;