import { EDIT_EMAIL, EDIT_PASSWORD } from "../actions";

export default function LoginReducer(state = null, action) {
    switch (action.type) {
        case EDIT_EMAIL:
            return { ...state, email: action.email };
        case EDIT_PASSWORD:
            return { ...state, password: action.password };
        default:
            return state;
    }
} 