import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user.model';


const ADD_USER_ENDPOINT = '/api/adduser';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(reqBody: any) {
    return this.http.post<UserModel>(ADD_USER_ENDPOINT, reqBody);
  }
}