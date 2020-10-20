import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MythVsFactPage } from './myth-vs-fact.page';

describe('MythVsFactPage', () => {
  let component: MythVsFactPage;
  let fixture: ComponentFixture<MythVsFactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MythVsFactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MythVsFactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
