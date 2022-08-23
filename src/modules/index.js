import { combineReducers } from "redux";
import userReducer from "./UserModule";
import itemReducer from "./ItemModule";

const rootReducer = combineReducers({
    userReducer,
    itemReducer
});

export default rootReducer;