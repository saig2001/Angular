import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbmarketingComponent } from './fbmarketing.component';

describe('FbmarketingComponent', () => {
  let component: FbmarketingComponent;
  let fixture: ComponentFixture<FbmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbmarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
