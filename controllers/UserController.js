const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// @DESC            LOGIN USER
// @ROUTE           POST /api/users/
// @ACCESS          PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    // Check if required arguments are passed
    if (!username || !password) {
        res.status(400)
        throw new Error('Invalid Credentials!')
    }
    try {
        // Find if username exists
        const user = await User.findOne({ username });
        if (!user) {
            res.status(400);
            throw new Error(`No user with ${username} exists!`)
        }
        // Check if password matches
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({
                username: user.username,
                email: user.email,
                token: generateToken(user.id)
            })
        }
    } catch (err) {
        res.status(400);
        throw new Error("User Doesn't Exist")
    }
})

// @DESC            REGISTER USER
// @ROUTE           POST /api/users/register
// @ACCESS          PUBLIC
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    // Check if required arguments are passed
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Invalid Credentials!')
    }
    // Check if email is already in use
    const user = await User.findOne({ email });
    if (user) {
        res.status(400);
        throw new Error('Email Already in use!')
    }
    try {
        // Hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating new user
        const newUser = await new User({
            username, email, password: hashedPassword
        })
        await newUser.save();
        res.status(200).json({
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            token: generateToken(newUser.id)
        })
    } catch (err) {
        res.status(404)
        throw new Error('User Creation Failed!')
    }
}

// GENERATING NEW JSON WEB TOKEN
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser
}