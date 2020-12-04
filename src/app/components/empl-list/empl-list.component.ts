import { Component, OnInit } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-list',
  templateUrl: './empl-list.component.html',
  styleUrls: ['./empl-list.component.css']
})
export class EmplListComponent implements OnInit {
  employee: string;

  constructor(private interactionService : EmplServiceService) { }

  ngOnInit(): void {
    this.interactionService.inputValue$.subscribe(emp=>this.employee = emp);

  }
  employeeList = [
    {
       id: 1,
       name: "John",
       lastName: "Perkz",
       picture: "",
       salary: "",
       onVac : true,       
    },
    {
      id: 2,
      name: "John",
      lastName: "Perkz",
      picture: "",
      salary: "",
      onVac : true,       
   },
   {
      id: 3,
      name: "John",
      lastName: "Perkz",
      picture: "",
      salary: "",
      onVac : true,       
    },
    {
      id: 4,
      name: "John",
      lastName: "Perkz",
      picture: "",
      salary: "",
      onVac : true,       
    },
    {
      id: 5,
      name: "John",
      lastName: "Perkz",
      picture: "",
      salary: "",
      onVac : true,       
    }

 
];

}
