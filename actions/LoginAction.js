import firebase from "firebase";

export const LOGIN_USER_SUCESS = "LOGIN_USER_SUCESS";
const loginUserSucess = user => ({
    type: LOGIN_USER_SUCESS,
    user
});

export const LOGOUT_USER = "LOGOUT_USER";
const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const login = ({ email, password }) => dispatch => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {       
        
        const action = loginUserSucess(user);
        dispatch(action);
        return user;
    })   
    .catch(erro => { return Promise.reject(erro) })
}