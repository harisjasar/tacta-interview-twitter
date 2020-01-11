import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { TweetModel } from '../../models/tweet.model';



const NUM_FOLLOWING_ENDPOINT = '/api/numFollowing';
const NUM_FOLLOWERS_ENDPOINT = '/api/numFollowers';
const ENDPOINT_BASE = '/api/tweets';



@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }


  numFollowing(): Observable<number> {
    return this.http.get<number>(NUM_FOLLOWING_ENDPOINT);
  }

  numFollowers(): Observable<number> {
    return this.http.get<number>(NUM_FOLLOWERS_ENDPOINT);
  }
}
