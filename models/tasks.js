const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
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
    }
});

const Tasks = mongoose.model("Tasks" , taskSchema);

module.exports = Tasks;