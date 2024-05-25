import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenquoteComponent } from './fullscreenquote.component';

describe('FullscreenquoteComponent', () => {
  let component: FullscreenquoteComponent;
  let fixture: ComponentFixture<FullscreenquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
