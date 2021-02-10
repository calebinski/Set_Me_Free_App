import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrustworthyPersonPage } from './trustworthy-person.page';

describe('TrustworthyPersonPage', () => {
  let component: TrustworthyPersonPage;
  let fixture: ComponentFixture<TrustworthyPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustworthyPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrustworthyPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
