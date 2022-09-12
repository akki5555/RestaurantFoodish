import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DeliverymanInfoPageRoutingModule } from './deliveryman-info-routing.module';

import { DeliverymanInfoPage } from './deliveryman-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    DeliverymanInfoPageRoutingModule
  ],
  declarations: [DeliverymanInfoPage]
})
export class DeliverymanInfoPageModule {}
