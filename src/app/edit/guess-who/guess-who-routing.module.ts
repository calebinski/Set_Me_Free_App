import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuessWhoPage } from './guess-who.page';

const routes: Routes = [
  {
    path: '',
    component: GuessWhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuessWhoPageRoutingModule {}
