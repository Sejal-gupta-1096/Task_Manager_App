const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const AVTAR_PATH = path.join("/uploads/avtars");

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
    ] , 
    avtar : {
        type : String
    }
} , {
    timestamps : true
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname , ".." , "/uploads/avtars"));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  userSchema.statics.upload = multer({ storage: storage }).single('avtar');
  userSchema.statics.avtarPath = AVTAR_PATH;
  
const Users = mongoose.model("Users" , userSchema);

module.exports = Users;