import { combineReducers } from "redux";
import uriReducer from "./uriReducer";
import boardReducer from "./boardReducer"

const rootReducer = combineReducers({
    uriReducer, boardReducer
});

export default rootReducer;