import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  bonuscounter = 0;
  public loading: HTMLIonLoadingElement;

  constructor(
    public firebaseService: FirebaseService,
    public toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getStatus()
  }

  ionViewWillEnter(){
    this.getStatus()
  }

  getStatus() {
    this.bonuscounter = this.firebaseService.user.bonuscard
  }

  createCoupon() {
    this.showLoading()
    this.firebaseService.resetBonuscardStatus()
    setTimeout(() => {
      this.getStatus()
      this.hideLoading()
      this.firebaseService.createCoupon()
      this.presentToast('Gutschein zum Warenkorb hinzugefügt!')
    }, 1000);
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

}
