import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/dashboard2/dashboard/dashboard.component';
import { ShowDetailsComponent } from './ui/show-detail/show-details/show-details.component';
import { ShowListComponent } from './ui/dashboard2/show-list/show-list.component';

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
