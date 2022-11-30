import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  testQuery(): Observable<any> {
   return  this.http.get<Show>(`${environment.api.baseUrl}/shows/169`);
  }

}
