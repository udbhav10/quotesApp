import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictwoComponent } from './statictwo.component';

describe('StatictwoComponent', () => {
  let component: StatictwoComponent;
  let fixture: ComponentFixture<StatictwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatictwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatictwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
