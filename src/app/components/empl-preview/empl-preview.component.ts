import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-preview',
  templateUrl: './empl-preview.component.html',
  styleUrls: ['./empl-preview.component.css']
})
export class EmplPreviewComponent implements OnInit {
  employeeProfile:any = "";
  show:boolean = false;
  constructor(private service:EmplServiceService) {
  }

  ngOnInit(): void {
    this.service.empPreview$.subscribe(emp => this.employeeProfile = emp);
  }
  showSalary(event){
    event.target.innerText = (!this.show) ? 'Hide salary' : 'Show salary';
    this.show = !this.show;
  }
}
