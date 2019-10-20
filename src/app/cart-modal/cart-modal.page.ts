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

    items: Array<any>;
    formattedItems: Array<any> = [];
    totalprice = 0;
    displayCoffee;

  ngOnInit() {
    this.firebaseService.getCart()
    .then(result => {
      this.items = result;
      this.items.forEach(element => {
        this.totalprice += +element.payload.doc.data().totalprice;
        this.formattedItems.push(element.payload.doc.data());
      });
      console.log(this.formattedItems)
    })
  }

  order() {
    this.firebaseService.createOrder(this.formattedItems)
    .then(result => {
      console.log('Bestellung wurde aufgegeben')
      
    }, err => {
      console.log("Fehler beim Erstellen der Bestellung")
    })
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}

