import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMRSComponent } from './imrs.component';

describe('IMRSComponent', () => {
  let component: IMRSComponent;
  let fixture: ComponentFixture<IMRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IMRSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
