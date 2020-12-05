import { Component, OnInit } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-info',
  templateUrl: './empl-info.component.html',
  styleUrls: ['./empl-info.component.css']
})
export class EmplInfoComponent implements OnInit {
  empList:any;
  
 
  constructor(private service:EmplServiceService) { }

  ngOnInit(): void {
    this.service.empInfo$.subscribe(emp=>this.empList = emp
      
     
      );
      console.log(this.empList);
  }


}
