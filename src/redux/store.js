import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { appReducer } from "./app/appReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ appReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
