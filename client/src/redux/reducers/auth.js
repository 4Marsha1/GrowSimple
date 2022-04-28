import { LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAILED, REGISTER_INITIATED, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isRegistrationInitiated: null,
    user: {},
    isRegistrationSuccessful: null,
    isLoginInitiated: null,
    isLoginSuccessful: null,
    msg: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_INITIATED:
            return {
                ...state,
                isRegistrationInitiated: true,
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isRegistrationInitiated: false,
                user: action.payload,
                isRegistrationSuccessful: true
            }
        case REGISTER_FAILED:
            return {
                ...state,
                isRegistrationInitiated: false,
                user: {},
                isRegistrationSuccessful: false,
                msg: action.payload
            }
        case LOGIN_INITIATED:
            return {
                ...state,
                isLoginInitiated: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isLoginInitiated: false,
                user: action.payload,
                isLoginSuccessful: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoginInitiated: false,
                user: {},
                isLoginSuccessful: false,
                msg: action.payload
            }
        case LOGOUT_USER:
            localStorage.removeItem('token')
            return {
                isRegistrationInitiated: null,
                user: {},
                isRegistrationSuccessful: null,
                isLoginInitiated: null,
                isLoginSuccessful: null,
                msg: ''
            }
        default: return state
    }
}

export default authReducer