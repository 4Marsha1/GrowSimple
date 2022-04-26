const asyncHandler = require('express-async-handler')

const auth = asyncHandler(async (req, res, next) => {
    let token;
    try {
        if (req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
    } catch (error) {

    }
})