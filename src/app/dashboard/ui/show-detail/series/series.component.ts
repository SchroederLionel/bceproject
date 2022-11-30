import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from '../../../data-access/series.service';
import {Observable ,map,tap} from'rxjs';
import { Series } from 'src/app/models/series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input("showId") showId!:number;

  constSeries: Series[]=[];

  series$?: Observable<Series[]>;

 
  constructor(private seriesService:SeriesService) { }
  
  ngOnInit(): void {
    this.series$ = this.seriesService.getSeries(this.showId).pipe(
      tap(series =>{
        console.log(series[0]);
        this.constSeries = series;
      }),
      map((series) => {
        return this.constSeries.filter(serie =>serie.season == 1);
      })
    )
  }

  filter(value:number){
    this.series$ =  this.series$!.pipe(
      map((series) => {
       return this.constSeries.filter(serie =>serie.season == value);
      })
    )
  }



}
