import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { ProfileService } from '../../../services/profile/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent implements OnInit{
  
  $fullName: string;
  ngOnInit() {

    this.profileService.fullName().subscribe(
      val => {
        this.$fullName = val;
      }
    )
  }
  

  constructor(private authService: AuthService, private profileService: ProfileService) {
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }

  getFullName(): any {
    return this.profileService.fullName();
  }

}
