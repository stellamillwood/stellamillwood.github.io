import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropTheBeatComponent } from './drop-the-beat.component';

describe('DropTheBeatComponent', () => {
  let component: DropTheBeatComponent;
  let fixture: ComponentFixture<DropTheBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropTheBeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropTheBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
