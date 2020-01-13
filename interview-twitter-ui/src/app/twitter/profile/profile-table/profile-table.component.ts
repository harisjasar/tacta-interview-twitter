import { Component, OnInit, Input } from '@angular/core';
import { TweetModel } from '../../../models/tweet.model';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {
  
  @Input() followers: any;
  @Input() following: any;
  @Input() tweets: TweetModel[];
  @Input() fullName: string;
  @Input() numOfTweets: number;
  @Input() numOfFollowers: number;
  @Input() numOfFollowing: number;
}
