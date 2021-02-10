import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrustworthyPersonPageRoutingModule } from './trustworthy-person-routing.module';

import { TrustworthyPersonPage } from './trustworthy-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrustworthyPersonPageRoutingModule
  ],
  declarations: [TrustworthyPersonPage]
})
export class TrustworthyPersonPageModule {}
