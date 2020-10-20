import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationPagePage } from './presentation-page.page';

const routes: Routes = [
  {
    path: '',
    component: PresentationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationPagePageRoutingModule {}
