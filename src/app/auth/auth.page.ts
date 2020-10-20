import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  userName: string;
  password: string;

  users: Observable<any>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private httpClient: HttpClient
  ) { 
    this.users = this.httpClient.get('https://localhost:44386/api/User');
    this.users.subscribe(data => {console.log('my data: ', data)});
  }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login(this.userName, this.password);
  }

  searchChanged()
  {
    this.apiService.getUsers();
  }
}
