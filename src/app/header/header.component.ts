import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() headerTitle: string;
  @Output() navOut = new EventEmitter();
  @Output() setLoggedInFlag = new EventEmitter();

  loginLabel = 'login';

  onNavLink(linkName: string) {
    if (linkName === 'logout') {
      this.loginLabel = 'login';
      this.setLoggedInFlag.emit(false);
    } else if (linkName === 'login') {
      this.loginLabel = 'logout';
      this.setLoggedInFlag.emit(true);
    }
    this.navOut.emit(linkName);
  }

  ngOnInit() {
  }

}
