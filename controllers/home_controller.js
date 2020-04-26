module.exports.home = function(request , response){
    Tasks.find({} , function(error , tasks){
        if(error){
            console.log("cannot fetch data from db");
            return;
        }
        console.log(tasks);
        return response.render("home" , {
            task_list : tasks
        });
    })
}

const Tasks = require("../models/tasks");

module.exports.addTasks = function(request , response){
    Tasks.create({
        description : request.body.description,
        category : request.body.category,
        date : request.body.date
    } , function(error , newTask){
        if(error){
            console.log(request.body.description , request.body.category , request.body.date);
            console.log("Error in creating a new task in database");
            return;
        }
        console.log(request.body.description , request.body.category , request.body.date);
        return response.redirect("back");
    })
}

