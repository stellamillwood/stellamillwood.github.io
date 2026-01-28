import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-stella-budget-prognos',
  standalone: true,
  templateUrl: './stella-budget-prognos.component.html',
  styleUrl: './stella-budget-prognos.component.css',
  imports: [ProjectInfoTableComponent],
})
export class StellaBudgetPrognosComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/stella-budget-prognos")!;
}
