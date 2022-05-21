import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfowindowdetailsPage } from './infowindowdetails.page';

const routes: Routes = [
  {
    path: '',
    component: InfowindowdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfowindowdetailsPageRoutingModule {}
