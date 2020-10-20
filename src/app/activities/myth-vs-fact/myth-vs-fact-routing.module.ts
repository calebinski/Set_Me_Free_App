import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MythVsFactPage } from './myth-vs-fact.page';

const routes: Routes = [
  {
    path: '',
    component: MythVsFactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class MythVsFactPageRoutingModule {}
