const express = require("express");
const passport = require("passport");
const router = express.Router();
const tasksController = require("../controllers/tasks_controller");

router.get("/" ,passport.checkAuthentication,tasksController.showTasksPage);
module.exports = router;