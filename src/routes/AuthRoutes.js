const express = require("express");
const router = express.Router();
const mAuthController = require("../controllers/AuthController");
router.post("/login", mAuthController.mLogIn);
router.post("/register", mAuthController.mRegister);



module.exports = router
