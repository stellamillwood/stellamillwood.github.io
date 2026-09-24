import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-stella-budget-prognos',
  standalone: true,
  templateUrl: './stella-budget-prognos.component.html',
  styleUrl: './stella-budget-prognos.component.css',
  imports: [ProjectInfoTableComponent],
})
export class StellaBudgetPrognosComponent {
  project: Project = getProject("/projects/stella-budget-prognos");
}
