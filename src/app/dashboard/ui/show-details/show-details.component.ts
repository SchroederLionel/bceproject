import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../data-access/show.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private showService:ShowService) { }
  
  ngOnInit(): void {
  }

}
