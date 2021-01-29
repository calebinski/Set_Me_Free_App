import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesPage } from './activities.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesPage
  },
  {
    path: 'myth-vs-fact',
    loadChildren: () => import('./myth-vs-fact/myth-vs-fact.module').then( m => m.MythVsFactPageModule)
  },  {
    path: 'guess-who',
    loadChildren: () => import('./guess-who/guess-who.module').then( m => m.GuessWhoPageModule)
  },
  {
    path: 'grooming-process',
    loadChildren: () => import('./grooming-process/grooming-process.module').then( m => m.GroomingProcessPageModule)
  },
  {
    path: 'collect-followers',
    loadChildren: () => import('./collect-followers/collect-followers.module').then( m => m.CollectFollowersPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesPageRoutingModule {}
