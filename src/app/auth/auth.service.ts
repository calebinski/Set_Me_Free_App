import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

export interface RefreshResponseData {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
  private _user = new BehaviorSubject<User>(null);
  private activeLogoutTimer: any;

  get userIsAuthenticated()
  {
    return this._user.asObservable().pipe(map(user => {
      if(user)
      {
        return !!user.token;
      }
      else
      {
        return false;
      }
    }));
  }

  get userId()
  {
    return this._user.asObservable().pipe(map(user => {
      if(user)
      {
        return user.id;
      }
      else
      {
        return null;
      }
    }));
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnDestroy()
  {
    if(this.activeLogoutTimer)
    {
      clearTimeout(this.activeLogoutTimer);
    }
  }

  signup(email: string, password: string)
  {
    return this.httpClient.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`,
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(tap(this.setUserData.bind(this)));
  }

  login(email: string, password: string)
  {
    return this.httpClient.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(tap(this.setUserData.bind(this)));
  }

  logout()
  {
    console.log("Auth service logout.");
    if(this.activeLogoutTimer)
    {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user = null;
    Plugins.Storage.remove({key: 'authData'});
    this.router.navigateByUrl('/auth');
  }

  private setUserData(userData: AuthResponseData)
  {
    const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
    const user = new User(userData.localId, userData.email, userData.idToken, expirationTime);
    this._user.next(user);
    this.storeAuthData(userData.localId, userData.idToken, userData.refreshToken, expirationTime.toISOString(), userData.email);
    this.autoLogout(user.tokenDuration);
  }

  private storeAuthData(userId: string, token: string, refreshToken: string, tokenExpirationDate: string, email: string)
  {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      refreshToken: refreshToken,
      tokenExpirationDate: tokenExpirationDate,
      email: email
    });
    Plugins.Storage.set({key: 'authData', value: data});
  }

  autoLogin()
  {
    return from(Plugins.Storage.get({key: 'authData'}))
    .pipe(map(storedData => {
      if(!storedData || !storedData.value)
      {
        return null;
      }

      const parsedData = JSON.parse(storedData.value) as {
        token: string; 
        tokenExpirationDate: string; 
        userId: string;
        email: string;
        refreshToken: string;
      };

      const expirationTime = new Date(parsedData.tokenExpirationDate);
      if(expirationTime <= new Date())
      {
        return null;
      }

      const user = new User(parsedData.userId, parsedData.email, parsedData.token, expirationTime);
      return user;
    }),
    tap(user => {
      if(user)
      {
        this._user.next(user);
        this.autoLogout(user.tokenDuration);
      }
    }),
    map(user => {
      return !!user;
    }));
  }

  private autoLogout(duration: number)
  {
    if(this.activeLogoutTimer)
    {
      clearTimeout(this.activeLogoutTimer);
    }

    this.activeLogoutTimer = setTimeout(() => {
      console.log("Refreshing login.");
      from(Plugins.Storage.get({key: 'authData'}))
        .pipe(map(storedData => {
          const parsedData = JSON.parse(storedData.value) as {
            token: string; 
            refreshToken: string;
            tokenExpirationDate: string; 
            userId: string;
            email: string;
          };
          
          let postData = {
            "grant_type" : "refresh_token",
            "refresh_token" : parsedData.refreshToken
          };

          this.httpClient.post(`https://securetoken.googleapis.com/v1/token?key=${environment.firebaseApiKey}`, postData)
          .subscribe((response) => {
            console.log("Refresh Response: ", response);
          });
        }));
      //this.logout();
    }, duration);
  }
}
