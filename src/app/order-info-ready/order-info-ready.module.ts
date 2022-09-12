import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { OrderInfoReadyPageRoutingModule } from './order-info-ready-routing.module';

import { OrderInfoReadyPage } from './order-info-ready.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    OrderInfoReadyPageRoutingModule
  ],
  declarations: [OrderInfoReadyPage]
})
export class OrderInfoReadyPageModule {}
