import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer';
import navReducer from './navReducer';
import profileReducer from './profileReducer';


let reducer = combineReducers({
    dialogsReducer,
    navReducer,
    profileReducer
})

let store = createStore(reducer);

export default store;