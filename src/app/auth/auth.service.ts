import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userFullName: string;

  get userIsAuthenticated()
  {
    return this._userIsAuthenticated;
  }
  get UserFullName()
  {
    return this._userFullName;
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  login(userName: string, password: string){
    this._userIsAuthenticated = true;
    //this.router.navigateByUrl('/home');
  }

  logout(){
    this._userIsAuthenticated = false;
  }
}
