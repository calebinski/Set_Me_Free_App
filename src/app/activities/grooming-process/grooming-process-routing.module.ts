import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroomingProcessPage } from './grooming-process.page';

const routes: Routes = [
  {
    path: '',
    component: GroomingProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroomingProcessPageRoutingModule {}
