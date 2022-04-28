import axios from "axios";
import { GET_MOVIE_LIST_FAILED, GET_MOVIE_LIST_INITIATED, GET_MOVIE_LIST_SUCCESS } from "./types"

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