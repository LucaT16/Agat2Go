import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { AuthService } from '../services/auth.service';
import { ProfilePage } from '../profile/profile.page';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy, OnEnter {

  items: Array<any>;
  favs: Array<any>;
  prodId: string;
  uid: String;
  badgeCount = 0;
  agataClosed = false;
  private subscription: Subscription;
  private notstop = false;


  constructor(
    public firebaseService: FirebaseService,
    public modalController: ModalController,
    private authService: AuthService,
    public toastController: ToastController,
    public alertController: AlertController,
    public router: Router
  ) { }


  public async ngOnInit(): Promise<void> {
    this.firebaseService.getProducts()
      .then(result => {
        this.items = result;
      })
    if (this.authService.afAuth.auth.currentUser == null) {
      //this.router.navigate(["/login"])
    } else {
      this.uid = this.authService.afAuth.auth.currentUser.uid
    }
    //this.getTime()
    this.loadFavs()

    await this.onEnter();

    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/tabs/tab1') {
        this.onEnter();
      }
    });
  }

  public async onEnter(): Promise<void> {
    this.ionViewWillEnter()
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ionViewWillEnter() {
    this.loadFavs()
    this.loadCart()
    this.getNotstop()
  }

  loadFavs() {
    this.firebaseService.getFavs()
      .then(result => {
        this.favs = result;
      })
  }

  removeFav(id) {
    this.firebaseService.deleteFav(id)
      .then(result => {
        this.loadFavs()
      })
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
        if (this.badgeCount != result.length) {
          this.badgeCount = result.length
        }
      })
  }

  getTime() {
    var d = new Date().toLocaleString("en-EN", { timeZone: "Europe/Berlin" });
    var date = new Date(d)
    var timeString = date.toTimeString()

    if (timeString == "17:30:00 GMT+0200") {
      this.agataClosed = true;
    }
  }

  getNotstop() {
    this.firebaseService.getNotstop()
      .then(result => {
        var item = result.payload.data();
        this.notstop = item.notstop;
        //console.log(this.notstop);
      })
  }

  closedNotification() {
    this.presentAlert("Agata hat geschlossen!", "Wir haben leider schon geschlossen. Schau doch einfach nochmal morgen vorbei!", ['OK'])
  }

  closedNotstop() {
    this.presentAlert("Agat2Go hat geschlossen!", "Die Pilotphase ist (vorerst) beendet. Halte dich an das Agat2Go Team für weitere Infos! :)", ['OK'])
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header, message, buttons) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }

  async toCart() {
    this.getNotstop()

    if (this.notstop) {
      this.closedNotstop()
      return
    } else {
      const modal = await this.modalController.create({
        component: CartModalPage
      });
      modal.onDidDismiss().then(() => {
        this.loadCart()
      });
      return await modal.present();
    }
  }

  async toProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage
    });
    return await modal.present();
  }
}

export interface OnEnter {
  onEnter(): Promise<void>;
}