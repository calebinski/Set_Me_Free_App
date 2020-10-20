import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentationPagePageRoutingModule } from './presentation-page-routing.module';

import { PresentationPagePage } from './presentation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationPagePageRoutingModule
  ],
  declarations: [PresentationPagePage]
})
export class PresentationPagePageModule {}
