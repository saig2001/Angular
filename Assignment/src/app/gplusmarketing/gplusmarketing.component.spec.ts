import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GplusmarketingComponent } from './gplusmarketing.component';

describe('GplusmarketingComponent', () => {
  let component: GplusmarketingComponent;
  let fixture: ComponentFixture<GplusmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GplusmarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GplusmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
