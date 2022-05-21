import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginnewPageRoutingModule } from './loginnew-routing.module';

import { LoginnewPage } from './loginnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginnewPageRoutingModule
  ],
  declarations: [LoginnewPage]
})
export class LoginnewPageModule {}
