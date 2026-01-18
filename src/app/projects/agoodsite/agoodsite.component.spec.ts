import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemAGoodIdComponent } from './agoodsite.component';

describe('DesignSystemAGoodIdComponent', () => {
  let component: DesignSystemAGoodIdComponent;
  let fixture: ComponentFixture<DesignSystemAGoodIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemAGoodIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSystemAGoodIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
