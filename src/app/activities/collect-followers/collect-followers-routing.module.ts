import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectFollowersPage } from './collect-followers.page';

const routes: Routes = [
  {
    path: '',
    component: CollectFollowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectFollowersPageRoutingModule {}
