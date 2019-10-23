import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {ElementRef, ViewChild} from '@angular/core';






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
    ordered = false;
    timestamp: string;
    timeSet = false;
    currentTime: string;

  ngOnInit() {
    this.loadCart()
    this.getTime()
  }

  loadCart() {
    this.totalprice = 0;
    this.firebaseService.getCart()
    .then(result => {
      this.items = result;
      this.items.forEach(element => {
        this.totalprice += +element.payload.doc.data().totalprice;
        this.formattedItems.push(element.payload.doc.data());
      });
    })
  }

  order() {
    this.firebaseService.createOrder(this.formattedItems, this.timestamp)
    .then(result => {
      console.log('Bestellung wurde aufgegeben')
      this.items.forEach(element => {
        this.firebaseService.deleteItemFromCart(element.payload.doc.id)
        .then(result => {
          this.loadCart()
          this.ordered = true;
        })
      });

    }, err => {
      console.log("Fehler beim Erstellen der Bestellung")
    })
  }

  removeItemFromCart(id){
    this.firebaseService.deleteItemFromCart(id)
    .then(result => {
      this.loadCart()
    })
  }

  removeAllItemsFromCart(){
    this.items.forEach(element => {
      this.firebaseService.deleteItemFromCart(element.payload.doc.id)
      .then(result => {
        this.loadCart()
      })
    });
  }

  getTime() {
    var d = new Date().toLocaleString("en-EN", {timeZone: "Europe/Berlin"});
    var date = new Date(d)
    var min = date.getMinutes()
    var hours = date.getHours()
    this.currentTime = hours + ":" + min
  }

  setTime($event){
    this.timeSet = true;
    this.timestamp = $event.detail.value;
  }

  async closeModal(){
    await this.modalController.dismiss();
  }


  disableButton(){

  }


}


