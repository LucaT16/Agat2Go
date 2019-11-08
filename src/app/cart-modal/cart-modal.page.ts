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
  couponvalue = 0;
  hatGutschein = false;
  isUsingGutschein = false;
  ordered = false;
  timestamp: string;
  timeSet = false;
  currentTime: string;
  checked = false

  ngOnInit() {
    this.loadCart()
    this.getTime()
    this.hatGutschein = this.firebaseService.getGutscheinStatus()
  }

  loadCart() {
    this.totalprice = 0;
    this.firebaseService.getCart()
      .then(result => {
        this.items = result;
        this.items.forEach(element => {
          this.totalprice += +element.payload.doc.data().totalprice;
          this.formattedItems.push(element.payload.doc.data());
          if (+element.payload.doc.data().totalprice > this.couponvalue) {
            this.couponvalue = +element.payload.doc.data().totalprice;
          }
        });
      })
      this.hatGutschein = this.firebaseService.getGutscheinStatus()
  }

  order() {
    this.firebaseService.createOrder(this.formattedItems, this.timestamp, this.totalprice.toFixed(2))
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
    if(this.isUsingGutschein) {
      this.firebaseService.resetCoupon()
    }
  }

  useCoupon() {
    this.checked = !this.checked
    if (this.checked) {
      this.totalprice -= this.couponvalue
      this.isUsingGutschein = true
    } else {
      this.totalprice += this.couponvalue
      this.isUsingGutschein = false
    }
  }

  removeItemFromCart(id) {
    this.firebaseService.deleteItemFromCart(id)
      .then(result => {
        this.loadCart()
      })
  }

  removeAllItemsFromCart() {
    this.items.forEach(element => {
      this.firebaseService.deleteItemFromCart(element.payload.doc.id)
        .then(result => {
          this.loadCart()
        })
    });
  }

  getTime() {
    var d = new Date().toLocaleString("en-EN", { timeZone: "Europe/Berlin" });
    var date = new Date(d)
    var min = date.getMinutes() + 10
    var hours = date.getHours()
    this.currentTime = hours + ":" + min
  }

  setTime($event) {
    this.timeSet = true;
    this.timestamp = $event.detail.value;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}


