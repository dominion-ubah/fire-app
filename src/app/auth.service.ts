import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
public user: Observable<firebase.User>;
  constructor( private afa: AngularFireAuth) {
    this.user = this.afa.authState;
  }
login(e, p): Observable<any> {
  return Observable.fromPromise(
    this.afa.auth.signInWithEmailAndPassword(e, p)
  );
}
loginWithGoogle( ) {
  this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
isAuthentcated(): Observable<boolean> {
  return this.user.map(user => user && user.uid !== undefined );
}
logout() {
  return this.afa.auth.signOut();
}
signUp(e, p): Observable<any> {
  return Observable.fromPromise(
    this.afa.auth.createUserWithEmailAndPassword(e, p)
  );
}
}
