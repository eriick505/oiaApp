import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import NewUserReducer  from "./NewUserReducer";

export default combineReducers({
    login: LoginReducer,
    newUser: NewUserReducer,
});