import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFeatureComponent } from './banner-feature.component';

describe('BannerFeatureComponent', () => {
  let component: BannerFeatureComponent;
  let fixture: ComponentFixture<BannerFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
