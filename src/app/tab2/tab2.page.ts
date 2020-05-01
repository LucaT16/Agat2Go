import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  bonuscounter = 0;
  public loading: HTMLIonLoadingElement;
  hatGutschein = false;
  emo = "&#x1F60A";

  constructor(
    public firebaseService: FirebaseService,
    public toastController: ToastController,
    public alertController: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getStatus()
  }

  ionViewWillEnter() {
    this.getStatus()
  }

  getStatus() {
    this.bonuscounter = this.firebaseService.user.bonuscard
    this.hatGutschein = this.firebaseService.getGutscheinStatus()
  }

  createCoupon() {
    if (!this.hatGutschein) {
      this.showLoading()
      this.firebaseService.resetBonuscardStatus()
      setTimeout(() => {
        this.getStatus()
        this.hideLoading()
        this.firebaseService.createCoupon()
        this.presentToast('Gutschein zum Warenkorb hinzugefügt!')
      }, 1000);
    } else {
      this.presentAlert("Warte einen Moment!", "Du hast bereits einen Gutschein. Bitte verwende erst diesen bevor du einen neuen einlöst.", ["OK"])
    }

  }

  doRefresh(event) {
    setTimeout(() => {
      this.getStatus()
      event.target.complete()
    }, 1000);

  }

  async showLoading(): Promise<void> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
  }

  hideLoading(): Promise<boolean> {
    return this.loading.dismiss()
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

}
