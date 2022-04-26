const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectdb = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.json());
connectdb();

// ROUTES
app.use('/api/users/', require('./routes/userRoutes'));
app.use('/api/movies/', require('./routes/movieRoutes'));

// ERROR HANDLER
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))