const express = require('express');
const { getMovies, rateMovie, checkRating, addMovie } = require('../controllers/MovieController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(authMiddleware, getMovies).post(authMiddleware, addMovie);
router.route('/:id').get(authMiddleware, checkRating).put(authMiddleware, rateMovie)

module.exports = router