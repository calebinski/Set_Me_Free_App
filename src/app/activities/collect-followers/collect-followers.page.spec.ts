import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollectFollowersPage } from './collect-followers.page';

describe('CollectFollowersPage', () => {
  let component: CollectFollowersPage;
  let fixture: ComponentFixture<CollectFollowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectFollowersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectFollowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
