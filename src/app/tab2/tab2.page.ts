import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  bonuscounter = 1;

  constructor(
    public firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.getStatus()
  }

  ionViewWillEnter(){
    this.getStatus()
  }

  getStatus() {
    this.bonuscounter = this.firebaseService.user.bonuscard

  }

}
