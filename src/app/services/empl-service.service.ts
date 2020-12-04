import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplServiceService {


  private  inputValueSource = new Subject<string>();
  inputValue$ = this.inputValueSource.asObservable();


  constructor() { }

  sendValue(value: string){
    this.inputValueSource.next(value);
  }
}
