import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesbyauthorComponent } from './quotesbyauthor.component';

describe('QuotesbyauthorComponent', () => {
  let component: QuotesbyauthorComponent;
  let fixture: ComponentFixture<QuotesbyauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesbyauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
