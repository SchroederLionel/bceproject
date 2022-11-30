import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject,Subject ,mergeMap, Observable,merge,map } from 'rxjs';
import { Show } from 'src/app/models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  private searchTermSubject = new Subject<string>();
  searchTerm$ = this.searchTermSubject.asObservable();

  private pageNumberSubject = new BehaviorSubject<number>(1);
  pageNumber$ = this.pageNumberSubject.asObservable();

  search(term:string){
    this.searchTermSubject.next(term);
  }

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

  shows$ = merge(
    this.searchTerm$,
    this.pageNumber$
  ).pipe(
    mergeMap(
      value => {
        if(typeof value  === 'number'){
          return this.getShows(value);
         }else {
           return this.getForSearch(value);
         }
      }
    )
  );

    
  

  private getShows(pageNumber:number): Observable<Show[]> {
   return  this.http.get<Show[]>(`${environment.api.baseUrl}/shows?page=${pageNumber}`);
  }

  private getForSearch(term:string): Observable<Show[]> {
    return  this.http.get<Show>(`${environment.api.baseUrl}/singlesearch/shows?q=${term}`).pipe(map(show =>[show]))
  }


 

}
