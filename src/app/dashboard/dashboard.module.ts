import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { ShowCardComponent } from './ui/show-card/show-card.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { SearchComponent } from './feature/search/search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShowCardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
