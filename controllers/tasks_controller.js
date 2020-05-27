const Users = require("../models/users");
const Tasks = require("../models/tasks");

module.exports.showTasksPage = async function(request , response){

    try{

        let user = await Users.findById(request.user._id);
    
        await user.populate("tasks").execPopulate();
    
        console.log(user);
    
        response.render("_view_tasks" , {
            layout: "layoutsA",
            user : user,
        });
    }catch(error){
        console.log(error);
    }
   
}

module.exports.addTaskForm = async function(request , response){

    return response.render("add-task-form" , {
        layout : "layoutsA"
    });
}

module.exports.addTask = async function(request , response){

    try{

        let task = await Tasks.create({
            title : request.body.title,
            description : request.body.description,
            category : request.body.category,
            date : request.body.date,
            user : request.user
        })

        let user = await Users.findById(request.user);

        if(user){
            user.tasks.push(task);
            user.save();
        }
        console.log(task);
        return response.redirect("back");

    }catch(error){

        console.log("Error : " , error);
    }
    
}

module.exports.deleteTask = async function(request , response){

    let task = await Tasks.findById(request.query.id);

    if(task){
       task.remove();

       let user =  await Users.findByIdAndUpdate(request.user , { $pull : {tasks : request.query.id}});

    }

    

    return response.redirect("back");
}