import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";


const NUM_FOLLOWING_ENDPOINT = '/api/numFollowing';
const NUM_FOLLOWERS_ENDPOINT = '/api/numFollowers';
const FULLNAME_ENDPOINT = '/api/fullName'

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }


  numFollowing(): Observable<number> {
    return this.http.get<number>(NUM_FOLLOWING_ENDPOINT);
  }

  numFollowers(): Observable<number> {
    return this.http.get<number>(NUM_FOLLOWERS_ENDPOINT);
  }

  fullName(): Observable<string> {
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.get<string>(FULLNAME_ENDPOINT, requestOptions);
  
}
}
