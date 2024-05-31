import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import listReducer from "./lista";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    list: listReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
