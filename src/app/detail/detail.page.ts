import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private data: DataService
    ) {}

  item = new Item();
  prodId: String;
  back = "Zurück";
  extras: Array<Extra>;
  addedExtras: Array<Extra> = []; 
  totalprice = this.item.price;


  ngOnInit() {
    this.data.currentMessage.subscribe(prodId => this.prodId = prodId)
    if(this.prodId == "no id"){
      this.router.navigate(["/tabs/tab1"]);
    }
    this.firebaseService.getProduct(this.prodId)
    .then(result => {
      this.item = result.payload.data();
    })
    this.firebaseService.getExtras()
    .then(result => {
      this.extras = result;
    })
  }

  addExtra(item) {

    var extraExists = false;
    var count = 0;

    this.addedExtras.forEach(element => {
      if(element.name == item.name){
        extraExists = true
      }
      if(extraExists == false){
        count++;
      }
    });

    if(extraExists){
      this.addedExtras.splice(count, 1);
      this.totalprice -= +item.price

    } else {
      this.addedExtras.push(item)
      this.totalprice += +item.price
    }
  }

  addToCart() {
   this.addedExtras.forEach(element => {
     console.log(element);
     this.totalprice = +this.totalprice + +element.price;
     console.log(this.totalprice)
   });
   this.firebaseService.createCart(this.item, this.addedExtras)

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