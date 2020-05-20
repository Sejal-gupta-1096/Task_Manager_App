const express = require("express");
const passport = require("passport");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/" , homeController.home);
router.use("/users" , require("./users"));
router.use("/task" , passport.checkAuthentication ,require("./task"));

// router.post("/add-task" , homeController.addTasks);
// router.post("/delete-tasks" , homeController.deleteTasks);




module.exports = router;