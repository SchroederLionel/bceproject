import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CastService } from '../../../data-access/cast.service';
import { Location } from '@angular/common';
import {Observable,Subscription,tap} from 'rxjs';
import { CastMember } from 'src/app/models/person.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Show } from 'src/app/models/show.model';
import { ShowService } from 'src/app/dashboard/data-access/show.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
 
  constructor(private route:ActivatedRoute,private location:Location,private showService:ShowService ) { }
  routeSubscription$?:Subscription;
  showId?: number;
  show?:Show;
  ngOnInit(): void {
    this.routeSubscription$ = this.route.paramMap.subscribe(
      (params:ParamMap) => {
        const showId = Number(params.get('id'));
        this.showId = showId;  
        // In the rush implementation. Piping takeone(1) 
        this.showService.getSpecificShow(showId).subscribe(
         
          (show)=>{
            this.show = show;
        })
      }
    );

    

    
  }

  ngOnDestroy(): void {
    if (this.routeSubscription$) this.routeSubscription$.unsubscribe();
  }


  goBack() {
    this.location.back();
  }


}
