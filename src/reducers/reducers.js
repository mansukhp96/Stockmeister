import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import cryptoReducer from "./crypto-reducer";
import stocksReducer from "./stocks-reducer";

export default combineReducers({
    authReducer : authReducer,
    cryptoReducer : cryptoReducer,
    stocksReducer : stocksReducer
});