import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from '../../../data-access/series.service';
import {Observable ,BehaviorSubject} from'rxjs';
import { Series } from 'src/app/models/series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input("showId") showId!:number;
  series$?: Observable<Series[]>;

  filterBySeason$ = new BehaviorSubject<number>(1);
  constructor(private seriesService:SeriesService) { }
  
  ngOnInit(): void {
    this.series$ = this.seriesService.getSeries(this.showId);
  }

  search(){
    
  }



}
