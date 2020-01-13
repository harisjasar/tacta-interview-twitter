import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import { LogoutComponent } from './twitter/logout/logout.component';
import { ProfileService } from './services/profile/profile.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ProfileService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
