import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroomingProcessPageRoutingModule } from './grooming-process-routing.module';

import { GroomingProcessPage } from './grooming-process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroomingProcessPageRoutingModule
  ],
  declarations: [GroomingProcessPage]
})
export class GroomingProcessPageModule {}
