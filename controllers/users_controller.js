const Users = require("../models/users");
const fs = require("fs");
const path = require("path");
// var multer = require('multer')
// var upload = multer();

module.exports.signUp = function(request , response){
    if(request.isAuthenticated()){
        return response.redirect("back");
    }
    return response.render("sign-up",{layout : "layout"});
}

module.exports.signIn = function(request , response){
    console.log(request.isAuthenticated())
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

module.exports.update = async function(request , response){
    try{
       
            let user = await Users.findById(request.user);
           Users.upload(request , response , function(error){
                if(error){
                    console.log("error");
                    return;
                }

                console.log(request.file);

                user.name = request.body.name;
                user.email = request.body.email;

                //if file is present
                if(request.file){
                    //if already image is there then unlink that file
                    if(user.avtar && fs.existsSync(path.join(__dirname , ".." , user.avtar))){
                        fs.unlinkSync(path.join(__dirname , ".." , user.avtar));
                    }
                    //and upload new file (replace old file with new file)
                    user.avtar = Users.avtarPath + "/" + request.file.filename;
                }
                
                user.save();
                return response.redirect("back");
            });
                

    }catch(error){
        console.log("Error" , error);
        return;
    }
}