import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPage } from './edit.page';

const routes: Routes = [
  {
    path: '',
    component: EditPage
  },  {
    path: 'guess-who',
    loadChildren: () => import('./guess-who/guess-who.module').then( m => m.GuessWhoPageModule)
  },
  {
    path: 'trustworthy-person',
    loadChildren: () => import('./trustworthy-person/trustworthy-person.module').then( m => m.TrustworthyPersonPageModule)
  },
  {
    path: 'myth-vs-fact',
    loadChildren: () => import('./myth-vs-fact/myth-vs-fact.module').then( m => m.MythVsFactPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPageRoutingModule {}
