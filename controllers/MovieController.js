const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const Movie = require("../models/movieModel");

// @DESC            MOVIES LIST
// @ROUTE           GET /api/movies/
// @ACCESS          PRIVATE
const getMovies = asyncHandler(async (req, res) => {
    // SEND ENTIRE LIST
    try {
        const movies = await Movie.find();
        res.status(200).json(movies)
    } catch (err) {
        res.status(400);
        throw new Error("Movies couldn't be fetched")
    }
})

// @DESC            RATE A MOVIE
// @ROUTE           PUT /api/movies/:id
// @ACCESS          PRIVATE
const rateMovie = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            res.status(400);
            throw new Error("This Movie doesn't Exist")
        }
        movie.ratings.forEach(rating => {
            if (rating.user.toString() === req.user.id) {
                res.status(400);
                throw new Error("Already Rated")
            }
        })
        movie.ratings.unshift({ user: req.user.id })
        await movie.save();
        res.status(200).json(movie)
    } catch (err) {
        res.status(400);
        throw new Error("Rating Couldn't be added!")
    }
})

// @DESC            CHECK MOVIE RATING
// @ROUTE           GET /api/movies/:id
// @ACCESS          PRIVATE
const checkRating = asyncHandler(async (req, res) => {
    const id = req.params.id;
    res.status(200).json({ id })
    // FILTER OUT THE MOVIE BY ID & SEND AVG RATING OF THE MOVIE
})

// @DESC            ADD NEW MOVIE
// @ROUTE           POST /api/movies/
// @ACCESS          ADMIN
const addMovie = asyncHandler(async (req, res) => {
    const { title, poster, budget, overview, release_date, revenue, runtime, status, tagline } = req.body;
    if (!title || !poster || !budget || !overview || !release_date || !revenue || !runtime || !status || !tagline) {
        res.status(400);
        throw new Error("Can't add new movie! Incomplete Data")
    }
    try {
        const newMovie = await new Movie({
            title, poster, budget, overview, release_date, revenue, runtime, status, tagline
        })
        await newMovie.save();
        res.status(200).json(newMovie)
    } catch (err) {
        res.status(400);
        throw new Error('Movie Creation Failed')
    }
})

module.exports = {
    getMovies,
    rateMovie,
    checkRating,
    addMovie
}