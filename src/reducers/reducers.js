import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import cryptoReducer from "./crypto-reducer";

export default combineReducers({
    authReducer : authReducer,
    cryptoReducer : cryptoReducer
});