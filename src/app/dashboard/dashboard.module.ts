import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { ShowCardComponent } from './ui/show-card/show-card.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { SearchComponent } from './feature/search/search.component';
import { FormsReactiveModule } from '../shared/form-reactive.module';
import { ShowDetailsComponent } from './ui/show-details/show-details.component';
import { ShowListComponent } from './ui/show-list/show-list.component';
import { SeriesComponent } from './ui/series/series.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShowCardComponent,
    SearchComponent,
    ShowDetailsComponent,
    ShowListComponent,
    SeriesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsReactiveModule
  ]
})
export class DashboardModule { }
