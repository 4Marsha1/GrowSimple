import axios from "axios";
import { GET_MOVIE_LIST_FAILED, GET_MOVIE_LIST_INITIATED, GET_MOVIE_LIST_SUCCESS, RATE_MOVIE_FAILED, RATE_MOVIE_INITIATED, RATE_MOVIE_SUCCESS } from "./types"

export const getMovieList = (token) => async dispatch => {
    dispatch({
        type: GET_MOVIE_LIST_INITIATED
    })
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.get('http://localhost:5000/api/movies/', config);
        const data = await res.data
        dispatch({
            type: GET_MOVIE_LIST_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_MOVIE_LIST_FAILED,
            payload: err.message
        })
    }
}

export const rateMovie = (id, token) => async dispatch => {
    dispatch({
        type: RATE_MOVIE_INITIATED
    })
    try {
        console.log(token);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.post(`http://localhost:5000/api/movies/${id}`, config);
        const data = await res.data;
        dispatch({
            type: RATE_MOVIE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: RATE_MOVIE_FAILED,
            payload: err.message
        })
    }
}