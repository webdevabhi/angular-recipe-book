import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

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
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    console.log(token);
                    this.token = token;
                }
            );

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
