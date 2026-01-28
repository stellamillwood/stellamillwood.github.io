import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellaBudgetPrognosComponent } from './stella-budget-prognos.component';

describe('StellaBudgetPrognosComponent', () => {
  let component: StellaBudgetPrognosComponent;
  let fixture: ComponentFixture<StellaBudgetPrognosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StellaBudgetPrognosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellaBudgetPrognosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
