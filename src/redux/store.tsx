import {createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import loggerMiddleWare from "./middleware/logger";
import reducer from "./reducer";
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(loggerMiddleWare)));
export type AppDispatch = typeof store.dispatch
export default store;
