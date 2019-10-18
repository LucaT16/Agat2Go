import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ModalController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  items: Array<any>;
  prodId: string;
  uid: String;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private data: DataService,
    public modalController: ModalController,
    private authService: AuthService
  ) { }


  ngOnInit() {
    this.firebaseService.getProducts()
      .then(result => {
        this.items = result;
      })
    if(this.authService.afAuth.auth.currentUser == null) {
      this.router.navigate(["/login"])
    } else {
      this.uid = this.authService.afAuth.auth.currentUser.uid
    }
  }

  toDetailPage(item) {
    this.prodId = item.payload.doc.data().id;
    this.data.changeMessage(this.prodId);
    this.router.navigate(["/detail"]);
  }

  async toCart() {
    const modal = await this.modalController.create({
      component: CartPage
    });
    return await modal.present();
  }
}