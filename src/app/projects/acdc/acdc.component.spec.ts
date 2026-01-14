import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACDCComponent } from './acdc.component';

describe('ACDCComponent', () => {
  let component: ACDCComponent;
  let fixture: ComponentFixture<ACDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACDCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
