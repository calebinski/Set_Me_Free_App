import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "https://localhost:44386/api/";

  constructor(
    private httpClient: HttpClient
  ) { }

  //get
  public getUsers()
  {
    return this.httpClient.get(this.baseUrl + 'User');
  }

  //get user by username and password
  public getUserByUsername(username: string, password: string)
  {
    
  }

  //post
  public createUser()
  {

  }
}
