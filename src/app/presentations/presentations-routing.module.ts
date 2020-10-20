import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationsPage } from './presentations.page';

const routes: Routes = [
  {
    path: '',
    component: PresentationsPage
  },
  {
    path: ':presentationName',
    loadChildren: () => import('./presentation-page/presentation-page.module').then(m => m.PresentationPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationsPageRoutingModule {}
