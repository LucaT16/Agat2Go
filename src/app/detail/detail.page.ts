import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  item = new Item();
  prodId: String;
  back = "Zurück";
  picUrl = "";

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private data: DataService
    ) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(prodId => this.prodId = prodId)
    console.log(this.prodId)
    if(this.prodId == "no id"){
      this.router.navigate(["/tabs/tab1"]);
    }
    this.firebaseService.getProduct(this.prodId)
    .then(result => {
      this.item = result.payload.data();
      this.picUrl = "/assets/"+ this.item.name +".jpeg"
      console.log(this.item.name)
    })
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}

class Item {
  public name: String;
  public price: Number;
  public id: String;

  constructor() {}
};




