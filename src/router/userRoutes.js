const router = require('express').Router();
const controller = require('../controller/usercontroller')

router.get("/", controller.getAllUsers)

module.exports = router