import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitesComponent } from './gites.component';

describe('GitesComponent', () => {
  let component: GitesComponent;
  let fixture: ComponentFixture<GitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
