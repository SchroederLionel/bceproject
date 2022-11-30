import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Series } from 'src/app/models/series.model';
import { environment } from 'src/environments/environment';
import { ReplaySubject ,mergeMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  constructor(private http: HttpClient) { }

  private showIdSubject = new ReplaySubject<number>();
  showId$ = this.showIdSubject.asObservable();

  series$ = this.showId$.pipe(
    mergeMap(value => this.getSeries(value))
  );

  public getSeries(id:number){
    return this.http.get<Series[]>(`${environment.api.baseUrl}/shows/${id}/episodes`);
  }
}
