import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoTableComponent } from './project-info-table.component';

describe('ProjectInfoTableComponent', () => {
  let component: ProjectInfoTableComponent;
  let fixture: ComponentFixture<ProjectInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectInfoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
