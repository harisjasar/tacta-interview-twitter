import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import { LogoutComponent } from './twitter/logout/logout.component';
import { ProfileComponent } from './twitter/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    ProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
