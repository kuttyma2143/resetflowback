
/** @format */

const express = require('express')
const UserRoutes = require('./User_routers')

const router = express.Router();

router.use("/user", UserRoutes);


module.exports=router
