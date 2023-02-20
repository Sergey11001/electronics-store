import {combineReducers} from "redux";
import userReducer from "./userReducer";
import deviceReducer from "./deviceReducer";

export const rootReducer = combineReducers({
    userReducer,
    deviceReducer
} )