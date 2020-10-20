import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MythVsFactPageRoutingModule } from './myth-vs-fact-routing.module';

import { MythVsFactPage } from './myth-vs-fact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MythVsFactPageRoutingModule
  ],
  declarations: [MythVsFactPage]
})
export class MythVsFactPageModule {}
