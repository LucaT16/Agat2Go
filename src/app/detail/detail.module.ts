import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailPage } from './detail.page';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DetailPage }])
  ],
  declarations: [DetailPage],
 
})
export class DetailPageModule {}
