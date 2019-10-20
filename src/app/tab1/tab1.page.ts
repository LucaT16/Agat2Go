import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ModalController, ToastController } from '@ionic/angular';
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
    public toastController: ToastController
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
  }

  ionViewWillEnter() {
    this.loadFavs()
    this.loadCart()
  }

  ionViewDidEnter() {
    this.loadFavs()
  }

  loadFavs() {
    this.firebaseService.getFavs()
      .then(result => {
        this.favs = result;
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
  }

  loadCart() {
    this.badgeCount = 0;
    this.firebaseService.getCart()
    .then(result => {
      result.forEach(element => {
        this.badgeCount++;
      });
      console.log(this.badgeCount)
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
    return await modal.present();
  }

  async toProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage
    });
    return await modal.present();
  }
}

class Item {
  public name;
  public price;
}
