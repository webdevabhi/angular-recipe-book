import * as firebase from 'firebase';

export class AuthService {

    signupUser(email: string, password: string) {
        console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUsers(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log(error)
            );
    }
}
