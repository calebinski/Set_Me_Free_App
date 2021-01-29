import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectFollowersPageRoutingModule } from './collect-followers-routing.module';

import { CollectFollowersPage } from './collect-followers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectFollowersPageRoutingModule
  ],
  declarations: [CollectFollowersPage]
})
export class CollectFollowersPageModule {}
