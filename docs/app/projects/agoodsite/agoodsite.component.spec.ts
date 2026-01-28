import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGoodSiteComponent } from './agoodsite.component';

describe('AGoodSiteComponent', () => {
  let component: AGoodSiteComponent;
  let fixture: ComponentFixture<AGoodSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AGoodSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AGoodSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
