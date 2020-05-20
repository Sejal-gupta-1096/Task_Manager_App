const Users = require("../models/users");

module.exports.signUp = function(request , response){
    if(request.isAuthenticated()){
        return response.redirect("back");
    }
    return response.render("sign-up");
}

module.exports.signIn = function(request , response){
    if(request.isAuthenticated()){
        return response.redirect("back");
    }
    return response.render("sign-in");
}

module.exports.logOut = function(request , response){
    request.logOut();
    return response.redirect("/users/sign-in");
}

module.exports.createUser = function(request , response){
   Users.findOne({email:request.body.email} , function(error , user){
    if(user){
        return response.redirect("back");
    }else{
        Users.create(request.body); 
        return response.redirect("/users/sign-in");
    }
   }); 

}

module.exports.createSession = function(request , response){

    return response.redirect("/task");
}