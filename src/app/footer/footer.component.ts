import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  _isUserLoggedIn: boolean;

 get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
 }

@Input()
set isUserLoggedIn(value: boolean) {
    this._isUserLoggedIn = value;
}

ngOnInit() {

}

}
