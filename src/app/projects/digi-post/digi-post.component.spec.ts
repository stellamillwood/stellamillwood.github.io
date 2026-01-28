import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiPostComponent } from './digi-post.component';

describe('DigiPostComponent', () => {
  let component: DigiPostComponent;
  let fixture: ComponentFixture<DigiPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
