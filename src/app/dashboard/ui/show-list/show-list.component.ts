import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../data-access/show.service';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows$? : Observable<Show[]>;
  constructor(private showService: ShowService) { }
  
  ngOnInit(): void {
    this.shows$ = this.showService.shows$;
  }

}
