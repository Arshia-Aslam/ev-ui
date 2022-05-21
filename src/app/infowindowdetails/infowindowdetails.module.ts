import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfowindowdetailsPageRoutingModule } from './infowindowdetails-routing.module';

import { InfowindowdetailsPage } from './infowindowdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfowindowdetailsPageRoutingModule
  ],
  declarations: [InfowindowdetailsPage]
})
export class InfowindowdetailsPageModule {}
