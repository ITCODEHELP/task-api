const path = require('path');

const express = require('express');

const router = express.Router();

const user_controller = require("../controller/user_controller");



router.post("/Add_User_data", user_controller.Add_User_data);

router.get("/Get_User_data/:time", user_controller.Get_User_data);


module.exports = router;