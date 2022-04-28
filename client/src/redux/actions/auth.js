import axios from 'axios'
import { LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAILED, REGISTER_INITIATED, REGISTER_SUCCESS } from "./types"

export const registerUser = (username, email, password) => async dispatch => {
    dispatch({
        type: REGISTER_INITIATED
    })
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const body = {
            username, email, password
        }
        console.log(body);
        const res = await axios.post('http://localhost:5000/api/users/register', body, config);
        const data = await res.data
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: REGISTER_FAILED,
            payload: err.message
        })
    }
}

export const loginUser = (username, password) => async dispatch => {
    dispatch({
        type: LOGIN_INITIATED
    })
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const body = {
            username, password
        }
        const res = await axios.post('http://localhost:5000/api/users/', body, config);
        const data = await res.data
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED,
            payload: err.message
        })
    }
}

export const logoutUser = () => async dispatch => {
    dispatch({
        type: LOGOUT_USER
    })
}