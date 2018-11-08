import { LOGIN_USER_SUCESS, LOGOUT_USER} from '../actions';

export default function usuarioReducer(state = null, action){
    switch (action.type) {
        case LOGIN_USER_SUCESS:
            return action.user;
        case LOGOUT_USER:
            return null;  
        default:
            return state;
    }
}