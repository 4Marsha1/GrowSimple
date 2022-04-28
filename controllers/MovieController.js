const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const Movie = require("../models/movieModel");

// @DESC            MOVIES LIST
// @ROUTE           GET /api/movies/
// @ACCESS          PRIVATE
const getMovies = asyncHandler(async (req, res) => {
    try {
        // FETCH ALL MOVIES & SEND IN JSON FORMAT
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
        // FIND THE MOVIE BY ID
        const movie = await Movie.findById(id);
        // IF ID DOESN'T MATCH, MOVIE DOESN'T EXIST
        if (!movie) {
            res.status(400);
            throw new Error("This Movie doesn't Exist")
        }
        // TO AVOID RATING TWICE BY THE SAME USER
        if (movie.ratings.length > 0) {
            movie.ratings.forEach(rating => {
                if (rating.user.toString() === req.user.id) {
                    res.status(400);
                    throw new Error("Already Rated")
                }
            })
        }
        // ADD USER ID TO THE RATINGS LIST
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
    try {
        // FIND THE MOVIE BY ID
        const movie = await Movie.findById(id);
        // IF ID DOESN'T MATCH, MOVIE DOESN'T EXIST
        if (!movie) {
            res.status(400);
            throw new Error("This Movie doesn't Exist")
        }
        res.status(200).json(movie.ratings)
    } catch (err) {
        res.status(400);
        throw new Error("Rating Couldn't be retrieved!")
    }
})

// @DESC            ADD NEW MOVIE
// @ROUTE           POST /api/movies/
// @ACCESS          ADMIN
const addMovie = asyncHandler(async (req, res) => {
    const { title, poster, budget, overview, release_date, revenue, runtime, status, tagline } = req.body;
    // CHECK IF DATA IN INCOMPLETE TO CREATE A NEW MOVIE ITEM
    if (!title || !poster || !budget || !overview || !release_date || !revenue || !runtime || !status || !tagline) {
        res.status(400);
        throw new Error("Can't add new movie! Incomplete Data")
    }
    try {
        // CREATE A NEW MOVIE IN THE DB
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