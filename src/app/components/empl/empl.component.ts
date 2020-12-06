import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl',
  templateUrl: './empl.component.html',
  styleUrls: ['./empl.component.css']
})
export class EmplComponent implements OnInit {

  @Input() employee:any;
  @Output() sayHi:EventEmitter<string> = new EventEmitter();
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
  sayHiToParent(){
    this.sayHi.emit("Hello to parent from " + this.employee.fullName);
  }
}
