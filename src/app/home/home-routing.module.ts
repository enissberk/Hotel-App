import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'room-details',
    loadChildren: () => import('../room-details/room-details.module').then(m => m.RoomDetailsPageModule)
  },
  {
    path: 'activity-details',
    loadChildren: () => import('../activity-details/activity-details.module').then(m => m.ActivityDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
