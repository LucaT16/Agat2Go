import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController,
    private data: DataService,
    ) {}

  item = new Item();
  prodId: String;
  backBtn = "Zurück";
  extras: Array<any>;
  addedExtras: Array<Extra> = []; 
  totalprice = 0;
  lastExtraPrice = 0;


  ngOnInit() {
    this.data.currentMessage.subscribe(prodId => this.prodId = prodId)
    if(this.prodId == "no id"){
      this.router.navigate(["/tabs/tab1"]);
    }
    this.firebaseService.getProduct(this.prodId)
    .then(result => {
      this.item = result.payload.data();
      this.totalprice = this.item.price;
    })
    this.firebaseService.getExtras()
    .then(result => {
      this.extras = result;
    })
  }

  async favoriteAlert() {
    const alert = await this.alertController.create({
      header: 'Glückwunsch!',
     // subHeader: 'Subtitle',
      message: 'Sie haben einen neuen Favoriten hinzugefügt.',
      buttons: ['Alles klar']
    });

    await alert.present();
  }

  async toCart() {
    const modal = await this.modalController.create({
      component: CartModalPage
    });
    return await modal.present();
  }

  radioSelected(index) {
    this.totalprice -= this.lastExtraPrice
    this.addedExtras = []
    this.addedExtras.push(this.extras[index].payload.doc.data())
    this.lastExtraPrice = this.extras[index].payload.doc.data().price
    this.totalprice += this.lastExtraPrice
  }

  addToCart() {
   this.firebaseService.createCart(this.item, this.addedExtras, +this.totalprice.toFixed(2))
   this.router.navigate(["/tabs/tab1"])
  }

  addToFavorite() {
    this.firebaseService.createFav(this.item, this.addedExtras, +this.totalprice.toFixed(2))
   // alert("Favorit hinzugefügt!")
    this.favoriteAlert();
   }
}

class Item {
  public name: String;
  public price: number;
  public id: String;

  constructor() {}
};

class Extra {
  public name: String;
  public price: number;

  constructor(){}
};