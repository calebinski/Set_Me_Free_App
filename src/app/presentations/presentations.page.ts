import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresentationsService } from '../services/presentations.service';
import { Presentation } from './presentations.model';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.page.html',
  styleUrls: ['./presentations.page.scss'],
})
export class PresentationsPage implements OnInit {
  listedPresentations: Presentation[];

  constructor(
    private presentationsService: PresentationsService
  ) { }

  ngOnInit() {
    this.listedPresentations = this.presentationsService.presentations;
  }

  ionViewWillEnter()
  {
    this.listedPresentations = this.presentationsService.presentations;
  }
}
