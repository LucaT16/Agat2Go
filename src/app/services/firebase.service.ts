import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';
import { UserProfile } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public user: UserProfile;
  private snapshotChangesSubscription: any;
  public userId: string;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private authService: AuthService,
    public profileService: ProfileService
  ){
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.user = userProfile;
      });
    });
    this.userId =  "ykcNl10gYmOnrsyqHLfkHnZxC5E3";  //this.authService.userId;
  }

  getProducts(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/coffee').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getProduct(prodId){
    return new Promise<any>((resolve, reject) => {
      this.afs.doc('/coffee/' + prodId).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getExtras(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/Extras').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getFavs(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('user').doc(this.userId).collection('favs').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getCart(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('user').doc(this.userId).collection('carts').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getBonuscardStatus(){
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.user = userProfile;
      });
    });
    return this.user.bonuscard
  }

  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  updateTask(taskKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deleteTask(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deleteItemFromCart(itemId) {
    return new Promise<any>((resolve, reject) => {
       this.afs.collection('user').doc(this.userId).collection('carts').doc(itemId).delete()
       .then(
         res => resolve(res),
         err => reject(err)
       )
    })
  }

  deleteFav(itemId) {
    return new Promise<any>((resolve, reject) => {
       this.afs.collection('user').doc(this.userId).collection('favs').doc(itemId).delete()
       .then(
         res => resolve(res),
         err => reject(err)
       )
    })
  }

  createCart(coffee, extras, totalprice){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('user').doc(this.userId).collection('carts').add({
        name: coffee.name,
        price: coffee.price,
        totalprice: totalprice,
        extra: extras
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  createFav(coffee, extras, totalprice){
    return new Promise<any>((resolve, reject) => {
      // let currentUser = firebase.auth().currentUser;
      this.afs.collection('user').doc(this.userId).collection('favs').add({
        name: coffee.name,
        price: coffee.price,
        totalprice: totalprice,
        extra: extras
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  createOrder(items, time) {
    return new Promise<any>((resolve, reject) => {
      // let currentUser = firebase.auth().currentUser;
      this.afs.collection('order').add({
        products: items,
        user: this.user.name,
        userId: this.userId,
        time: time
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  } 
  

}