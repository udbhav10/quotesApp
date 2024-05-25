import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticoneComponent } from './staticone.component';

describe('StaticoneComponent', () => {
  let component: StaticoneComponent;
  let fixture: ComponentFixture<StaticoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
