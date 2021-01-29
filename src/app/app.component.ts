import { Component, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  private previousAuthState = false;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit()
  {
    this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
      //console.log('Subscribing to user authentication.');
      //console.log(isAuth, this.previousAuthState);
      //console.log("Should change on logout", !isAuth && this.previousAuthState !== isAuth);
      if(!isAuth && this.previousAuthState !== isAuth)
      {
        console.log('Logging out.')
        this.router.navigateByUrl('/auth');
      }
      this.previousAuthState = isAuth;
      //console.log("previous: ", this.previousAuthState);
    });
  }

  ngOnDestroy()
  {
    //console.log("Destroyed.");
    if(this.authSub)
    {
      //console.log("Unsubscribed from auth sub.");
      this.authSub.unsubscribe();
    }
  }

  onLogout(){
    this.authService.logout();
  }
}
