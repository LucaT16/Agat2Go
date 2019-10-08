import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  items: Array<any>;
  prodId:string;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private data: DataService
    ) { }


 ngOnInit() {
   this.firebaseService.getProducts()
    .then(result => {
      this.items = result;
    })
  }

  toDetailPage(item) {
    this.prodId = item.payload.doc.data().id;
    this.data.changeMessage(this.prodId);
    this.router.navigate(["/detail"]);
    }

  test(item){
    var name = item.payload.doc.data().name;
    var price = item.payload.doc.data().price;
    var id = item.payload.doc.data().id;
    alert(name + ' ' + price + ' ' + id);
  }
}