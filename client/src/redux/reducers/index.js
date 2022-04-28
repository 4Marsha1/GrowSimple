import { combineReducers } from "redux";
import authReducer from "./auth";
import movieReducer from "./movies";

const rootReducer = combineReducers({
    authReducer: authReducer,
    movieReducer: movieReducer
})

export default rootReducer