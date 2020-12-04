import { Component, OnInit } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-list',
  templateUrl: './empl-list.component.html',
  styleUrls: ['./empl-list.component.css']
})
export class EmplListComponent implements OnInit {
  employee: string;
  prop:string = "fullName";
  constructor(private interactionService : EmplServiceService) { 
    console.log(this.employeeList);
  }

  ngOnInit(): void {
    this.interactionService.inputValue$.subscribe(emp=>this.employee = emp);

  }
  employeeList = [
    {
       id: 1,
       name: "Alex",
       lastName: "Perkz",
       fullName: "Alex Perkz",
       picture: "",
       salary: "",
       onVac : true,       
    },
    {
      id: 2,
      name: "Aleksa",
      lastName: "Perkz",
      fullName: "Aleksa Perkz",
      picture: "",
      salary: "",
      onVac : true,       
   },
   {
      id: 3,
      name: "Aleksa",
      lastName: "Zivkovic",
      fullName: "Aleksa Zivkovic",
      picture: "",
      salary: "",
      onVac : true,       
    },
    {
      id: 4,
      name: "John",
      lastName: "Perkz",
      fullName: "John Perkz",
      picture: "",
      salary: "",
      onVac : true,       
    },
    {
      id: 5,
      name: "John",
      lastName: "Perkz",
      fullName: "John Perkz",
      picture: "",
      salary: "",
      onVac : true,       
    }

 
];

}
