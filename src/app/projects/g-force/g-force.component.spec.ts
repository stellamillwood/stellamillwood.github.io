import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GForceComponent } from './g-force.component';

describe('GForceComponent', () => {
  let component: GForceComponent;
  let fixture: ComponentFixture<GForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GForceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
