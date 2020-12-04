import { Component, OnInit } from '@angular/core';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-preview',
  templateUrl: './empl-preview.component.html',
  styleUrls: ['./empl-preview.component.css']
})
export class EmplPreviewComponent implements OnInit {
  employeeProfile:any = "";

  constructor(private service:EmplServiceService) { }

  ngOnInit(): void {
    this.service.empPreview$.subscribe(emp => this.employeeProfile = emp);
  }

}
