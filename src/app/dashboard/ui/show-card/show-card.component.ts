import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show! : Show;
  constructor() { }

  ngOnInit(): void {
  }

}
