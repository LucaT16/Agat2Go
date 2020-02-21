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
  hasProducts= false;
  currentTime: string;
  checked = false;
  toGo = true;

  ngOnInit() {
    this.loadCart()
    this.getTime()
    this.hatGutschein = this.firebaseService.getGutscheinStatus()
  }

  loadCart() {
    this.formattedItems = []
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
        if(this.formattedItems.length > 0) {
          this.hasProducts = true
        } else {
          this.hasProducts = false
        }
      })
      this.hatGutschein = this.firebaseService.getGutscheinStatus()
  }

  order() {
    this.firebaseService.createOrder(this.formattedItems, this.timestamp, this.totalprice.toFixed(2), this.toGo)
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

  changeToGo() {
    this.toGo = !this.toGo;
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
    var min = date.getMinutes() 
    var hours = date.getHours()

    if (hours < 10) {
      this.currentTime = "0" + hours + ":" + min
    } else {
      this.currentTime = hours + ":" + min
    }
    console.log(this.currentTime)
  }

  setTime($event) {
    this.timeSet = true;
    this.timestamp = $event.detail.value;
    console.log(this.timeSet)
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}


