import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, mergeMap, Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  private pageNumberSubject = new BehaviorSubject<number>(1);
  pageNumber$ = this.pageNumberSubject.asObservable();

  nextPage() {
    let currentPage:number =  this.pageNumberSubject.value;
    this.pageNumberSubject.next(currentPage+1);
  }
  previousPage() {
    let currentPage:number =  this.pageNumberSubject.value;
    if(currentPage > 1) {
      this.pageNumberSubject.next(currentPage+1);
    }
  }


  shows$ = this.pageNumber$.pipe(
    mergeMap(value => this.getShows(value))
  );

  private getShows(pageNumber:number): Observable<Show[]> {
   return  this.http.get<Show[]>(`${environment.api.baseUrl}/shows?page=${pageNumber}`);
  }

}
