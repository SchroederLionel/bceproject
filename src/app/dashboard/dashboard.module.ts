import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { ShowCardComponent } from './ui/dashboard2/show-card/show-card.component';
import { DashboardComponent } from './ui/dashboard2/dashboard/dashboard.component';
import { SearchComponent } from './feature/search/search.component';
import { FormsReactiveModule } from '../shared/form-reactive.module';
import { ShowDetailsComponent } from './ui/show-detail/show-details/show-details.component';
import { ShowListComponent } from './ui/dashboard2/show-list/show-list.component';
import { SeriesComponent } from './ui/show-detail/series/series.component';
import { ShowCastListComponent } from './ui/show-detail/show-cast-list/show-cast-list.component';
import { FilterComponent } from './ui/show-detail/filter/filter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ShowCardComponent,
    SearchComponent,
    ShowDetailsComponent,
    ShowListComponent,
    SeriesComponent,
    ShowCastListComponent,
    FilterComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsReactiveModule
  ]
})
export class DashboardModule { }
