import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
  selector: 'app-empl-preview',
  templateUrl: './empl-preview.component.html',
  styleUrls: ['./empl-preview.component.css']
})

export class EmplPreviewComponent implements OnInit, OnDestroy {
  employeeProfile:any = ""; // ne vraca default-nu sliku ako je {}
  show:boolean = false;
  private subscription:Subscription;

  constructor(private service:EmplServiceService) {
    console.log(this.employeeProfile);
  }

  ngOnInit(): void {
    this.subscription = this.service.empPreview$.subscribe((emp) => {
      console.log(this.employeeProfile);
      if(!emp) return;
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
