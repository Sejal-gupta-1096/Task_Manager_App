const Users = require("../models/users");

module.exports.signUp = function(request , response){
    return response.render("sign-up");
}

module.exports.signIn = function(request , response){
    return response.render("sign-in");
}

module.exports.createUser = function(request , response){
   Users.findOne({email:request.body.email} , function(error , user){
    if(user){
        return response.redirect("back");
    }else{
        Users.create(request.body); 
        return response.redirect("back");
    }
   }); 

}