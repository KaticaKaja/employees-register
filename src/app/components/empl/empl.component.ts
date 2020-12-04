import { Component, Input, OnInit } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl',
  templateUrl: './empl.component.html',
  styleUrls: ['./empl.component.css']
})
export class EmplComponent implements OnInit {

  @Input() employee:any;
  constructor(private service:EmplServiceService) { 
  }

  ngOnInit(): void {
  }

  previewEmployee(){
    if(this.employee === undefined){
      return;
    }
    this.service.sendEmplPrev(this.employee);
  }
}
