const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
const authController = require('../controller/authController')

router.post('/',userController.addUser)
router.post('/login',authController.generateToken)
router.get('/:id',authController.verify,userController.getUser)


module.exports = router;
