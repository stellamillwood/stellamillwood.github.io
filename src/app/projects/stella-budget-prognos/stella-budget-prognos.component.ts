import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-stella-budget-prognos',
  standalone: true,
  templateUrl: './stella-budget-prognos.component.html',
  styleUrl: './stella-budget-prognos.component.css',
})
export class StellaBudgetPrognosComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/stella-budget-prognos")!;
}
