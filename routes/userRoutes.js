const express = require('express');
const { registerUser, loginUser } = require('../controllers/UserController');
const router = express.Router();

router.route('/').post(loginUser)
router.route('/register').post(registerUser)

module.exports = router