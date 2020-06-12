const express = require("express");
const passport = require("passport");
const router = express.Router();


const usersController = require("../controllers/users_controller");

router.get("/sign-up" , usersController.signUp);
router.get("/sign-in" , usersController.signIn);
router.get("/update-form" ,passport.checkAuthentication,usersController.updateForm);
router.post("/update" ,passport.checkAuthentication,usersController.update);
router.get("/log-out" , passport.checkAuthentication,usersController.logOut);
router.post("/create-user" , usersController.createUser);
router.post("/create-session" ,  
passport.authenticate('local',
                      { 
                        failureRedirect: 'back',
                        failureFlash: true 
                       }),
                        usersController.createSession);
router.get("/auth/google" , passport.authenticate("google" , 
      {
        scope :["profile" , "email"]
      }
));
router.get("/auth/google/callback" , passport.authenticate("google" , 
      {
        failureRedirect : '/users/sign-in'
      }
) , usersController.createSession)

module.exports = router;