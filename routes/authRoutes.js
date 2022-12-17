const express = require("express");
const router = express.Router();

//controller
const AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.login);
router.get("/register", AuthController.register);

module.exports = router;
