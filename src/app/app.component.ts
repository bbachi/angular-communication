import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-communication';
  linkName: string;

  loginFlag: boolean;

  onNavigation(navLink: string) {
    this.linkName = navLink;
  }

  setLoggedInUser(loggedIn: boolean) {
    this.loginFlag = loggedIn;
  }
}
