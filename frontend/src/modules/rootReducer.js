import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import uriReducer from "./uriReducer";
import boardReducer from "./boardReducer"
import postReducer from "./postReducer";
import freeReducer from './freeReducer';
import loginReducer from "./loginReducer";
import memReducer from "./memReducer";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    uriReducer, 
    // boardReducer, 
    noti : postReducer, 
    free : freeReducer,
    mem : memReducer,
    login : loginReducer
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();