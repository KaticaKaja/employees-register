import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplServiceService {


  private  inputValueSource = new Subject<string>(); //search => empl-list
  inputValue$ = this.inputValueSource.asObservable();

  private employeePrevSource = new Subject<string>();
  empPreview$ = this.employeePrevSource.asObservable(); //empl => empl-preview

  private employeeInfoSource = new BehaviorSubject<Array<any>>([]);
  empInfo$ = this.employeeInfoSource.asObservable();

  constructor() { }


  sendValue(value: string){
    this.inputValueSource.next(value);
  }

  sendEmplPrev(value: any){
    if(!value) return;
    this.employeePrevSource.next(value);
  }

  sendEmplInfo(value: any){
    if(!value) return;
    this.employeeInfoSource.next(value);
  }
}
