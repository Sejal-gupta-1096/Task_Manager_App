const express = require("express");
const passport = require("passport");
const router = express.Router();

const usersController = require("../controllers/users_controller");

router.get("/sign-up" , usersController.signUp);
router.get("/sign-in" , usersController.signIn);
router.get("/log-out" , usersController.logOut);
router.post("/create-user" , usersController.createUser);
router.post("/create-session" ,  
passport.authenticate('local',
                      { 
                        failureRedirect: 'back',
                        failureFlash: true 
                       }),
                        usersController.createSession);

module.exports = router;