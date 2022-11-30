import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { CastMember } from 'src/app/models/person.model';
import { CastService } from '../../../data-access/cast.service';
@Component({
  selector: 'app-show-cast-list',
  templateUrl: './show-cast-list.component.html',
  styleUrls: ['./show-cast-list.component.css']
})
export class ShowCastListComponent implements OnInit {
  @Input("showId") showId!:number;
  
  casters$?: Observable<CastMember[]>;
  constructor(private castService:CastService) { }

  ngOnInit(): void {
    this.casters$ = this.castService.casting$;
    this.castService.getCast(this.showId);
  }

}
