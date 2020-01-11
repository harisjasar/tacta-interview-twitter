import { Component, OnInit, Input } from '@angular/core';
import { TweetModel } from '../../../models/tweet.model';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {
  
  @Input() followers: number;
  @Input() following: number;
  @Input() tweets: TweetModel[];

}
