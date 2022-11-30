import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Series } from 'src/app/models/series.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('series') series!: Series[];
  savedSeries: Series[]= this.series;
  
  @Output('serie-number') serieNumber = new EventEmitter<number>;
  howManySeries:number[]=[];

  constructor() { }
  selected ='1';

  ngOnInit(): void {
    let ser:number[] = [];
    this.series.forEach((serie)=> {
      if(serie.season){
        ser.push(serie.season);
      }
    })
    this.howManySeries = [...new Set(ser)];

    console.log('series')
  }

  valueChanged(value:number){
    console.log('EMITTED');
   this.serieNumber.emit(value);
  }

}
