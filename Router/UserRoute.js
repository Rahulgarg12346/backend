const express = require('express')

const UserController = require('../Controller/UserController');

const router = express.Router();

router.post('/Usersignup', UserController.signup);
router.post('/Userlogin', UserController.login);

module.exports=router;