import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorcardComponent } from './authorcard.component';

describe('AuthorcardComponent', () => {
  let component: AuthorcardComponent;
  let fixture: ComponentFixture<AuthorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
