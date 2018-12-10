import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoDetailsComponent } from './admin-video-details.component';

describe('AdminVideoDetailsComponent', () => {
  let component: AdminVideoDetailsComponent;
  let fixture: ComponentFixture<AdminVideoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
