const express = require("express");
const passport = require("passport");
const router = express.Router();
const tasksController = require("../controllers/tasks_controller");

router.get("/",tasksController.showTasksPage);
router.get("/add-task-form",tasksController.addTaskForm);
router.post("/add-task" , tasksController.addTask)
router.get("/delete-task" , tasksController.deleteTask)
module.exports = router;