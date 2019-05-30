import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeMessageComponent } from './welcome/welcome-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    WelcomeComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
