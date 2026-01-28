import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TajmaComponent } from './tajma.component';

describe('TajmaComponent', () => {
  let component: TajmaComponent;
  let fixture: ComponentFixture<TajmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TajmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TajmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
