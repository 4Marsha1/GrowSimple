const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    ratings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;