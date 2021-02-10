import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrustworthyPersonPage } from './trustworthy-person.page';

const routes: Routes = [
  {
    path: '',
    component: TrustworthyPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrustworthyPersonPageRoutingModule {}
