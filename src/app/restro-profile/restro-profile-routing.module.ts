import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestroProfilePage } from './restro-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RestroProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestroProfilePageRoutingModule {}
