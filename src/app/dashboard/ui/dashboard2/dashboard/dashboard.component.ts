import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';
import { ShowService } from '../../../data-access/show.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
   
  }

}
