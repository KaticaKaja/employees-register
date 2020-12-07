import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-preview',
  templateUrl: './empl-preview.component.html',
  styleUrls: ['./empl-preview.component.css']
})

export class EmplPreviewComponent implements OnInit, OnDestroy {
  employeeProfile:any = "";
  show:boolean = false;
  private subscription:Subscription;

  constructor(private service:EmplServiceService) {
  }

  ngOnInit(): void {
    this.service.empPreview$.subscribe((emp) => {
      this.show = false;
      this.employeeProfile = emp;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  showSalary(event){
    if(!event) return;
    event.target.innerText = (!this.show) ? 'Hide salary' : 'Show salary';
    this.show = !this.show;
  }

}
