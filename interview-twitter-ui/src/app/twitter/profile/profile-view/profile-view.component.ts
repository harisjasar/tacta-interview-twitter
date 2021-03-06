import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../../../services/profile/profile.service';
import { TweetService } from '../../../services/tweet/tweet.service';
import { TweetModel } from '../../../models/tweet.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  $followers: Observable<any>;
  $following: Observable<any>;
  $tweets: Observable<TweetModel[]>
  $fullName: Observable<string>;

  constructor(private profileService: ProfileService, private authService: AuthService, private tweetService: TweetService){}
  
  ngOnInit() {
    this.$followers = this.profileService.followers();
    this.$following = this.profileService.following();
    this.$tweets = this.tweetService.fetchForUser(this.authService.getCurrentUser());
    this.$fullName = this.profileService.fullName();
  }

}



