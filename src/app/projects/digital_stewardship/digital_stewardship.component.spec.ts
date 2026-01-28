import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStewardshipComponent } from './digital_stewardship.component';

describe('DigitalStewardshipComponent', () => {
  let component: DigitalStewardshipComponent;
  let fixture: ComponentFixture<DigitalStewardshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalStewardshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalStewardshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
