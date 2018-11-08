import firebase from 'firebase';

export const tryRegister = ({email, password}) => dispatch => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                alert(error.code);
            });
}

export const tryInsert = ({email, name, lastName, birthDate}) => dispatch => {

    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref('user').child(user.uid).set({
                name: name,
                last_name: lastName,
                birth_date: birthDate,
                email: email
            });
        }
    });
   
}