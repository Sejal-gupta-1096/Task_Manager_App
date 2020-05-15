const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/" , homeController.home);
router.get("/users" , require("./users"));

router.post("/add-task" , homeController.addTasks);
router.post("/delete-tasks" , homeController.deleteTasks);




module.exports = router;