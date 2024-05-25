import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QotdComponent } from './qotd.component';

describe('QotdComponent', () => {
  let component: QotdComponent;
  let fixture: ComponentFixture<QotdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QotdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
