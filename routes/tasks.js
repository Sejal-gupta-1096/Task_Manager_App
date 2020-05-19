const express = require("express");
const passport = require("passport");
const router = express.Router();
const tasksController = require("../controllers/tasks_controller");

router.get("/",tasksController.showTasksPage);
router.get("/add-task",tasksController.addTask);
module.exports = router;