import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject ,mergeMap, Observable,merge,map } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }
  private idSubject = new Subject<number>();
  showId$ = this.idSubject.asObservable();


   getCast(id:number){
    this.idSubject.next(id);
  }

  casting$ = this.showId$.pipe(
    mergeMap(id => {
       return  this.http.get<Person[]>(`${environment.api.baseUrl}/shows/${id}/cast`);
    })
  );
}
