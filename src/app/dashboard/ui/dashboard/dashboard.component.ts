import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../data-access/show.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private showService:ShowService) { }

  ngOnInit(): void {
      this.showService.testQuery().subscribe(
        (shows) => {
          console.log(shows);
        }
      )
  }

}
