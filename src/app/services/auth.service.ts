import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string;
  public userProfile;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  getUser(): Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async signup(email: string, password: string, name: String): Promise<firebase.auth.UserCredential> {
    const newUserCredential: firebase.auth.UserCredential = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    await this.firestore
      .doc(`user/${newUserCredential.user.uid}`)
      .set({ email, name});
    return newUserCredential;
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
