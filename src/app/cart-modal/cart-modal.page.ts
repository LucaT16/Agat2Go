import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
    public firebaseService: FirebaseService,
    ) { }

    items: Array<any>
    formattedItems: Array<any>
    totalprice = 0;

  ngOnInit() {
    this.firebaseService.getCart()
    .then(result => {
      this.items = result;
      this.items.forEach(element => {
        this.totalprice += +element.payload.doc.data().totalprice;
        
      });
      console.log(this.formattedItems)
    })
  }

  order() {
    this.firebaseService.createOrder(this.items)
    .then(result => {
      alert('bestellung wurde aufgegeben')
    })
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}

