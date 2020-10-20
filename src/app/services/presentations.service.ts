import { Injectable } from '@angular/core';
import { Presentation } from '../presentations/presentations.model';

@Injectable({
  providedIn: 'root'
})
export class PresentationsService {
  private _presentations: Presentation[] = [
    new Presentation('Embedded Link', 'https://www.slideshare.net/slideshow/embed_code/key/oe9k15aHHmmbFD'),
    new Presentation('Link to SlideShare', '//www.slideshare.net/slideshow/embed_code/key/GaimX22TyRPt0B')
  ];

  get presentations()
  {
    return [...this._presentations];
  }

  constructor() { }

  getPresentation(name: string)
  {
    return {...this._presentations.find(p => p.name === name)};
  }
}
