const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users_controller");

router.get("/sign-up" , usersController.signUp);
router.post("/create-user" , usersController.createUser);

module.exports = router;