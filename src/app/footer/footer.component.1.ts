import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent1 implements OnInit {

  constructor(private appService: AppService) { }
  isUserLoggedIn: boolean;

  ngOnInit() {
    this.appService.isUserLoggedIn.subscribe((userLoggedIn: boolean) => {
        this.isUserLoggedIn = userLoggedIn;
    });
  }

}
