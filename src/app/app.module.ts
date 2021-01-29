import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD9yB3wVhJ_ssc5l2C2ClJxp7eDHh12WrE",
  authDomain: "authtest-1b233.firebaseapp.com",
  databaseURL: "https://authtest-1b233-default-rtdb.firebaseio.com",
  projectId: "authtest-1b233",
  storageBucket: "authtest-1b233.appspot.com",
  messagingSenderId: "998826376463",
  appId: "1:998826376463:web:d4b73f323c422d2546d27a",
  measurementId: "G-3N9N6YVRKV"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
