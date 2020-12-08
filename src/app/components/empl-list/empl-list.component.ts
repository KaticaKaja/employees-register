import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-list',
  templateUrl: './empl-list.component.html',
  styleUrls: ['./empl-list.component.css']
})
export class EmplListComponent implements OnInit, OnDestroy {

  searchedEmployee: string ="";
  prop:string = "fullName";
  messageFromChild:string = "";
  private subscription:Subscription;
  constructor(private interactionService : EmplServiceService) {
  }


  ngOnInit(): void {
    this.subscription = this.interactionService.inputValue$.subscribe((inputSearch)=>{
      this.searchedEmployee = inputSearch;
    });
    this.interactionService.sendEmplInfo(this.employeeList);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  receiveMsg(msg){
    if(!msg) return;
    this.messageFromChild = msg;
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
      lastName: "Colic",
      fullName: "Aleksa Colic",
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
      name: "William",
      lastName: "Perkz",
      fullName: "William Perkz",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 1234,
      onVac : false,
    },
    {
      id: 5,
      name: "Alexandra",
      lastName: "Jones",
      fullName: "Alexandra Jones",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 5654,
      onVac : true,
    },
    {
      id: 6,
      name: "Milos",
      lastName: "Crnjanski",
      fullName: "Milos Crnjanski",
      picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
      salary: 5654,
      onVac : true,
    }
];

}
