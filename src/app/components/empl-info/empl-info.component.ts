import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmplServiceService } from 'src/app/services/empl-service.service';

@Component({
    selector: 'app-empl-info',
    templateUrl: './empl-info.component.html',
    styleUrls: ['./empl-info.component.css']
})
export class EmplInfoComponent implements OnInit, OnDestroy {

    empList: Array<any> = [];
    private subcription: Subscription;

    constructor(private service: EmplServiceService) { }

    ngOnInit(): void {
        this.subcription = this.service.empInfo$.subscribe((emp: Array<any>) => {
            if (!Array.isArray(emp)) return;
            this.empList = emp;
        });
    }

    ngOnDestroy(): void {
        this.subcription.unsubscribe();
    }
}
