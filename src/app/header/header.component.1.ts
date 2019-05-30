import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent1 implements OnInit {

  constructor(private appService: AppService) { }

  @Input() headerTitle: string;
  @Output() navOut = new EventEmitter();

  loginLabel = 'login';

  onNavLink(linkName: string) {
    if (linkName === 'logout') {
      this.loginLabel = 'login';
      this.appService.setUserLoggedIn(false);
    } else if (linkName === 'login') {
      this.loginLabel = 'logout';
      this.appService.setUserLoggedIn(true);
    }
    this.navOut.emit(linkName);
  }

  ngOnInit() {
  }

}
