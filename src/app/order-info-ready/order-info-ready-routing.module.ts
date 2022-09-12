import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderInfoReadyPage } from './order-info-ready.page';

const routes: Routes = [
  {
    path: '',
    component: OrderInfoReadyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderInfoReadyPageRoutingModule {}
