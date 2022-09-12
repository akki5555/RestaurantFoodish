import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverymanInfoPage } from './deliveryman-info.page';

const routes: Routes = [
  {
    path: '',
    component: DeliverymanInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverymanInfoPageRoutingModule {}
