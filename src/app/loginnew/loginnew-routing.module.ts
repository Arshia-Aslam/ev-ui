import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginnewPage } from './loginnew.page';

const routes: Routes = [
  {
    path: '',
    component: LoginnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginnewPageRoutingModule {}
