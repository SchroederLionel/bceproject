import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Series } from 'src/app/models/series.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  constructor(private http: HttpClient) { }



  public getSeries(id:number){
    return this.http.get<Series[]>(`${environment.api.baseUrl}/shows/${id}/episodes`);
  }
}
