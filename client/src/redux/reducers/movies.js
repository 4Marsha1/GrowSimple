import { GET_MOVIE_LIST_FAILED, GET_MOVIE_LIST_INITIATED, GET_MOVIE_LIST_SUCCESS } from "../actions/types"

const initialState = {
    fetching: null,
    movies: [],
    fetched: null,
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
        default: return state
    }
}

export default movieReducer