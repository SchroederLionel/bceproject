import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShowService } from '../../data-access/show.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term:string ='';
  constructor(private showService: ShowService,private formBuilder: FormBuilder) { }

  searchForm = this.formBuilder.group({
    queryTerm : ''
  });

  ngOnInit(): void {
  }

  onSubmit():void {
    let term = this.searchForm.value.queryTerm;
    if(term != undefined && term != null){
      this.showService.search(term);
    }
  }



}