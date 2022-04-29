import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

var store = createStore(rootReducer,
    applyMiddleware(thunk));


export default store;