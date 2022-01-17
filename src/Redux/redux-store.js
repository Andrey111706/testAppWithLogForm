import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import thunkMiddleware from "redux-thunk"

const rootStore = combineReducers({form: formReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootStore, composeEnhancers( applyMiddleware(thunkMiddleware)))


window.store=store
export default store