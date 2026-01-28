import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-flourish',
  standalone: true,
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css',
  imports: [ProjectInfoTableComponent],
})
export class FlourishComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/flourish")!;
}
