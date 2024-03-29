import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserProfile } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfile: AngularFirestoreDocument<UserProfile>;
  public currentUser: firebase.User;
  public userId: string;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  async getUserProfile(): Promise<Observable<UserProfile>> {
    const user: firebase.User = await this.authService.getUser();
    this.currentUser = user;
    this.userId = user.uid;
    this.userProfile = this.firestore.doc(`user/${user.uid}`);
    return this.userProfile.valueChanges();
  }

  updateName(name: string): Promise<void> {
    return this.userProfile.update({ name });
  }

  async updateEmail(newEmail: string, password: string): Promise<void> {
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      password
    );
    try {
      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updateEmail(newEmail);
      return this.userProfile.update({ email: newEmail });
    } catch (error) {
      console.error(error);
    }
  }

  async updatePassword(
    newPassword: string,
    oldPassword: string
  ): Promise<void> {
    const credential: firebase.auth.AuthCredential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      oldPassword
    );
    try {
      await this.currentUser.reauthenticateWithCredential(credential);
      return this.currentUser.updatePassword(newPassword);
    } catch (error) {
      console.error(error);
    }
  }
}
