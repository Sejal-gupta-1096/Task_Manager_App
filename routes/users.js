const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users_controller");

router.get("/sign-up" , usersController.signUp);

module.exports = router;