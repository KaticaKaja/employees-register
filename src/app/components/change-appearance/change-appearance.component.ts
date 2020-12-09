import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-change-appearance',
    templateUrl: './change-appearance.component.html',
    styleUrls: ['./change-appearance.component.css']
})
export class ChangeAppearanceComponent implements OnInit {

    constructor() { }

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

    decrement() {
        this.counter--;
    }

    increment() {
        this.counter++;
    }

    ngOnInit(): void {
    }

}
