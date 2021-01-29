import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroomingProcessPage } from './grooming-process.page';

describe('GroomingProcessPage', () => {
  let component: GroomingProcessPage;
  let fixture: ComponentFixture<GroomingProcessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingProcessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroomingProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
