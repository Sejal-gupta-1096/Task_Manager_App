const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller")
router.get("/" , homeController.home);

router.post("/add-task" , homeController.addTasks);

module.exports = router;