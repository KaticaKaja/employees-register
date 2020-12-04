import { Component, OnInit } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputSearch: string;
 
  constructor(private interactionService : EmplServiceService) { }

  ngOnInit(): void {
  }
  // getEmployee(emp){
  //   this.inputSearch = emp.value;

  // }

  sendEmployee(){
    this.interactionService.sendValue(this.inputSearch);
  }

}
