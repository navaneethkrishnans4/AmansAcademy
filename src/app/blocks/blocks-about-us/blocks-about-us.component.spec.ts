import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksAboutUsComponent } from './blocks-about-us.component';

describe('BlocksAboutUsComponent', () => {
  let component: BlocksAboutUsComponent;
  let fixture: ComponentFixture<BlocksAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocksAboutUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocksAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
