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
  }

  ngOnInit(): void {
    this.interactionService.inputValue$.subscribe(emp=>this.employee = emp);
    this.interactionService.sendEmplInfo(this.employeeList);
  }

  employeeList = [
    {
       id: 1,
       name: "Alex",
       lastName: "Perkz",
       fullName: "Alex Perkz",
       picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
       salary: 1200,
       onVac : false,
    },
    {
      id: 2,
      name: "Aleksa",
      lastName: "Perkz",
      fullName: "Aleksa Perkz",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 400,
      onVac : true,
   },
   {
      id: 3,
      name: "Aleksa",
      lastName: "Zivkovic",
      fullName: "Aleksa Zivkovic",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 3456,
      onVac : false,
    },
    {
      id: 4,
      name: "John",
      lastName: "Perkz",
      fullName: "John Perkz",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 1234,
      onVac : false,
    },
    {
      id: 5,
      name: "John",
      lastName: "Perkz",
      fullName: "John Perkz",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 5654,
      onVac : true,
    }
];

}
