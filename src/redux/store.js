import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { appReducer } from "./app/appReducer";
import {reducer as authReducer} from "./auth/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ appReducer,authReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
