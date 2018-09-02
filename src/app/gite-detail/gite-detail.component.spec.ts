import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiteDetailComponent } from './gite-detail.component';

describe('GiteDetailComponent', () => {
  let component: GiteDetailComponent;
  let fixture: ComponentFixture<GiteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
