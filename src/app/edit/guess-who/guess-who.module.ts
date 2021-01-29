import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessWhoPageRoutingModule } from './guess-who-routing.module';

import { GuessWhoPage } from './guess-who.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuessWhoPageRoutingModule
  ],
  declarations: [GuessWhoPage]
})
export class GuessWhoPageModule {}
