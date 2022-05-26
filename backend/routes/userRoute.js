const express = require("express");
const { registerUser } = require("../controller/userController");

const router = express.Router();

router.route("/user").post(registerUser);

module.exports = router;
