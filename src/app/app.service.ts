import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public isUserLoggedIn = new Subject();

  setUserLoggedIn(loggedIn: boolean) {
    this.isUserLoggedIn.next(loggedIn);
  }
}
