const express = require('express');
const { registerUser, loginUser } = require('../controllers/UserController');
const router = express.Router();

router.post('/', loginUser)
router.post('/register', registerUser)

module.exports = router