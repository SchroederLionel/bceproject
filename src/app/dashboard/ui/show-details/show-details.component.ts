import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CastService } from '../../data-access/cast.service';

import {Observable,Subscription,tap} from 'rxjs';
import { CastMember } from 'src/app/models/person.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
 
  constructor(private route:ActivatedRoute ) { }
  routeSubscription$?:Subscription;
  showId?: number;

  ngOnInit(): void {
    this.routeSubscription$ = this.route.paramMap.subscribe(
      (params:ParamMap) => {
        const showId = Number(params.get('id'));
        this.showId = showId;  
      }
    );
  }

  ngOnDestroy(): void {
    if (this.routeSubscription$) this.routeSubscription$.unsubscribe();
  }

}
