import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuessWhoPage } from './guess-who.page';

describe('GuessWhoPage', () => {
  let component: GuessWhoPage;
  let fixture: ComponentFixture<GuessWhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessWhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuessWhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
