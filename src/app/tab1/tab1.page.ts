import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }


 ngOnInit() {
   this.firebaseService.getProducts()
    .then(result => {
      this.items = result;
    })
  }

  test(item){
    var name = item.payload.doc.data().name;
    var price = item.payload.doc.data().price;
    alert(name + ' ' + price);
  }
}