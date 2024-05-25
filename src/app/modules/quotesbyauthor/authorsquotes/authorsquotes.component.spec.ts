import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsquotesComponent } from './authorsquotes.component';

describe('AuthorsquotesComponent', () => {
  let component: AuthorsquotesComponent;
  let fixture: ComponentFixture<AuthorsquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsquotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
