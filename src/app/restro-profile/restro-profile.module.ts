import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { RestroProfilePageRoutingModule } from './restro-profile-routing.module';

import { RestroProfilePage } from './restro-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    RestroProfilePageRoutingModule
  ],
  declarations: [RestroProfilePage]
})
export class RestroProfilePageModule {}
