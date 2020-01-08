import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/twitter/twitter.module#TwitterModule', canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  { path: 'logout', 
    component: LogoutComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
