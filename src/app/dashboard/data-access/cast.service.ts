import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,ReplaySubject ,mergeMap, Observable,merge,map,tap } from 'rxjs';
import { CastMember } from 'src/app/models/person.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }
  private idSubject = new ReplaySubject<number>();
  showId$ = this.idSubject.asObservable();


   getCast(id:number){
    this.idSubject.next(id);
  }

  casting$ = this.showId$.pipe(
    mergeMap(id => {
      
       return  this.http.get<CastMember[]>(`${environment.api.baseUrl}/shows/${id}/cast`).pipe(
        tap( val => console.log("asdasdsasd"))
       )
    })
  );

  test() {
    return  this.http.get<CastMember[]>(`${environment.api.baseUrl}/shows/169/cast`);
  } 
}
