import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PresentationsService } from 'src/app/services/presentations.service';
import { Presentation } from '../presentations.model';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.page.html',
  styleUrls: ['./presentation-page.page.scss'],
})
export class PresentationPagePage implements OnInit {
  presentation: Presentation;

  constructor(
    private presentationsService: PresentationsService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('presentationName'))
      {
        this.navCtrl.navigateBack('/presentations');
        return;
      }

      this.presentation = this.presentationsService.getPresentation(paramMap.get('presentationName'));
    });
  }

  openURL()
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.presentation.url);
  }

}
