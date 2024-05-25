import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorpopoverComponent } from './authorpopover.component';

describe('AuthorpopoverComponent', () => {
  let component: AuthorpopoverComponent;
  let fixture: ComponentFixture<AuthorpopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorpopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorpopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
