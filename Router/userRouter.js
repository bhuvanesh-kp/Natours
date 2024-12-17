const express = require('express');
const userContoller = require('./../Controllers/userController');


const router = express.Router();

router.route('/').get(userContoller.getAllUsers);

module.exports = router;

