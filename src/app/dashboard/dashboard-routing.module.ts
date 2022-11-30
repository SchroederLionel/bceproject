import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { ShowDetailsComponent } from './ui/show-details/show-details.component';
import { ShowListComponent } from './ui/show-list/show-list.component';

const routes: Routes = [
  {
    path: '', component:ShowListComponent,
  },
  {
    path:':id',component:ShowDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
