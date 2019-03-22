import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Store} from '../store';
import {tap} from 'rxjs/operators';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private store: Store
  ) { }

  auth$ = this.afAuth.authState.pipe(
    tap(next => {
      if (!next) {
        this.store.set('user', null);
        return;
      }
      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      };
      this.store.set('user', user);
    })
  );

  get user() {
    return this.afAuth.auth.currentUser;
  }

  get authState() {
    return this.afAuth.authState;
  }

  createUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }
}
