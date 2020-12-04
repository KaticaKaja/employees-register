import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplServiceService {


  private  inputValueSource = new Subject<string>(); //search => empl-list
  inputValue$ = this.inputValueSource.asObservable();
  
  private employeePrevSource = new Subject<string>();
  empPreview$ = this.employeePrevSource.asObservable(); //empl => empl-preview

  constructor() { }

  sendValue(value: string){
    this.inputValueSource.next(value);
  }

  sendEmplPrev(value:string){
    this.employeePrevSource.next(value);
  }
}
