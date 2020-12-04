import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empl-list',
  templateUrl: './empl-list.component.html',
  styleUrls: ['./empl-list.component.css']
})
export class EmplListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
