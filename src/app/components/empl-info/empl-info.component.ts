import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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

    //
    counterValue = 0;

    @Input()
    get counter() {
        return this.counterValue;
    }

    @Output() counterChange = new EventEmitter();

    set counter(val) {
        this.counterValue = val;
        this.counterChange.emit(this.counterValue);
    }

    // set counter(value) {
    //     this.counterValue = value;
    // }

    decrement() {
        this.counter--;
    }

    increment() {
        this.counter++;
    }
//

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
