import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-stella-budget-prognos',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './stella-budget-prognos.component.html',
  styleUrl: './stella-budget-prognos.component.css',
})
export class StellaBudgetPrognosComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/stella-budget-prognos")!;
}
