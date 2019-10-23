import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { AuthService } from '../services/auth.service';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  items: Array<any>;
  favs: Array<any>;
  prodId: string;
  uid: String;
  badgeCount = 0;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private data: DataService,
    public modalController: ModalController,
    private authService: AuthService,
    public toastController: ToastController,
    public navController: NavController
    ) { }


  ngOnInit() {
    this.firebaseService.getProducts()
      .then(result => {
        this.items = result;
      })
    if (this.authService.afAuth.auth.currentUser == null) {
      //this.router.navigate(["/login"])
    } else {
      this.uid = this.authService.afAuth.auth.currentUser.uid
    }
    this.loadFavs()
    //setInterval(()=> { this.ionViewDidEnter() }, 1 * 1000); //Machen wir zur Präsention wieder rein sonst ist die DB gefickt
  }

  ionViewDidEnter() {
    this.loadFavs()
    this.loadCart()
  }

  loadFavs() {
    this.firebaseService.getFavs()
      .then(result => {
        this.favs = result;
      })
  }

  removeFav(id){
    this.firebaseService.deleteFav(id)
    .then(result => {
      this.loadFavs()
    })
  }

  toDetailPage(item) {
    this.prodId = item.payload.doc.data().id;
    this.data.changeMessage(this.prodId);
    this.router.navigate(["/detail"]);
  }

  addFavToCart(index) {
    let coffee = this.favs[index].payload.doc.data();
    this.firebaseService.createCart(coffee, coffee.extra, +coffee.totalprice.toFixed(2))
    this.presentToast('Favorit zum Warenkorb hinzugefügt!')
    this.badgeCount++;
  }

  loadCart() {
    this.firebaseService.getCart()
    .then(result => {
      if(this.badgeCount != result.length) {
        this.badgeCount = result.length
      }
    })
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async toCart() {
    const modal = await this.modalController.create({
      component: CartModalPage
    });
    modal.onDidDismiss().then(() => {
      this.ionViewDidEnter()
    });
    return await modal.present();
  }

  async toProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage
    });
    return await modal.present();
  }
}