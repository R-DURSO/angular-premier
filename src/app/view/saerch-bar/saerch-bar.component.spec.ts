import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaerchBarComponent } from './saerch-bar.component';

describe('SaerchBarComponent', () => {
  let component: SaerchBarComponent;
  let fixture: ComponentFixture<SaerchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaerchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaerchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
