const Users = require("../models/users");

module.exports.signUp = function(request , response){
    if(request.isAuthenticated()){
        return response.redirect("back");
    }
    return response.render("sign-up",{layout : "layout"});
}

module.exports.signIn = function(request , response){
    if(request.isAuthenticated()){
        return response.redirect("back");
    }
    return response.render("sign-in" , {layout : "layout"});
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

module.exports.updateForm = function(request , response){

    response.render("update-form" , {
        layout : "layoutsA",
        user : request.user
    })
}