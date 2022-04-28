import { GET_MOVIE_LIST_FAILED, GET_MOVIE_LIST_INITIATED, GET_MOVIE_LIST_SUCCESS, RATE_MOVIE_FAILED, RATE_MOVIE_INITIATED, RATE_MOVIE_SUCCESS } from "../actions/types"

const initialState = {
    fetching: null,
    movies: [],
    fetched: null,
    rating: null,
    rated: null,
    msg: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_LIST_INITIATED:
            return {
                ...state,
                fetching: true
            }
        case GET_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                movies: action.payload
            }
        case GET_MOVIE_LIST_FAILED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                movies: [],
                msg: action.payload
            }
        case RATE_MOVIE_INITIATED:
            return {
                ...state,
                rating: true
            }
        case RATE_MOVIE_SUCCESS:
            return {
                ...state,
                rating: false,
                rated: true,
            }
        case RATE_MOVIE_FAILED:
            return {
                ...state,
                rating: false,
                rated: false,
                msg: action.payload
            }
        default: return state
    }
}

export default movieReducer