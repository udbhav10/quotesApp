import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticpagetwoComponent } from './staticpagetwo.component';

describe('StaticpagetwoComponent', () => {
  let component: StaticpagetwoComponent;
  let fixture: ComponentFixture<StaticpagetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticpagetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticpagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
