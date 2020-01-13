import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";


//const NUM_FOLLOWING_ENDPOINT = '/api/numFollowing';
//const NUM_FOLLOWERS_ENDPOINT = '/api/numFollowers';
const FOLLOWING_ENDPOINT = '/api/following';
const FOLLOWERS_ENDPOINT = '/api/followers';
const FULLNAME_ENDPOINT = '/api/fullName'

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }


  following(): Observable<any> {
    return this.http.get<any>(FOLLOWING_ENDPOINT);
  }

  followers(): Observable<any> {
    return this.http.get<any>(FOLLOWERS_ENDPOINT);
  }

  fullName(): Observable<string> {
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.get<string>(FULLNAME_ENDPOINT, requestOptions);
  
}
}
