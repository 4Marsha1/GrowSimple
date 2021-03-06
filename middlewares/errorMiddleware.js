// CUSTOM ERROR HANDLER
const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode ? req.statusCode : 500;
    res.status(statusCode);
    res.json({
        msg: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
    next();
}

module.exports = errorHandler;