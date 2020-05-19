const Users = require("../models/users");

module.exports.showTasksPage = async function(request , response){

    let user = await Users.findById(request.user._id);
    
    response.render("tasks" , {
        user : user
    });
}

module.exports.addTask = async function(request , response){

    return response.render("add-task-form");
}