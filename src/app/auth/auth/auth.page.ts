import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  authenticate(email: string, password: string)
  {
    this.isLoading = true;

    this.loadingCtrl
      .create({keyboardClose: true, message: 'Logging in...'})
      .then(loadingEl => {
        loadingEl.present();

        let authObs: Observable<AuthResponseData>;

        if(this.isLogin)
        {
          authObs = this.authService.login(email, password);
        }
        else
        {
          authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(response => {
          console.log(response);
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/home');
        }, errRes => {
          loadingEl.dismiss();

          const code = errRes.error.error.message;
          let message = 'Could not sign you up, please try again.';

          if(code === 'EMAIL_EXISTS')
          {
            message = 'Email already exists.';
          }
          else if(code === 'EMAIL_NOT_FOUND')
          {
            message = 'E-Mail not found.'
          }
          else if(code === 'INVALID_PASSWORD')
          {
            message = 'Password is not correct.';
          }

          this.showAlert(message);
        });
      });
  }

  onSubmit(form: NgForm)
  {
    if(!form.valid)
    {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password);

    this.authenticate(email, password);
    form.reset();
  }

  onSwitchAuthMode()
  {
    this.isLogin = !this.isLogin;
  }

  private showAlert(message: string)
  {
    this.alertCtrl.create({
      header: 'Authentication failed',
      message: message,
      buttons: ['Okay']
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}
