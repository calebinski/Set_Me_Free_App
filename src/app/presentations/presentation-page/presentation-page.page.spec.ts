import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresentationPagePage } from './presentation-page.page';

describe('PresentationPagePage', () => {
  let component: PresentationPagePage;
  let fixture: ComponentFixture<PresentationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
