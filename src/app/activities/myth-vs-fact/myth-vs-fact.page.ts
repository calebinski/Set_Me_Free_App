import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-myth-vs-fact',
  templateUrl: './myth-vs-fact.page.html',
  styleUrls: ['./myth-vs-fact.page.scss'],
})
export class MythVsFactPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewDidLoad(){

  }

}
