import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-g-force',
  standalone: true,
  templateUrl: './g-force.component.html',
  styleUrl: './g-force.component.css',
  imports: [ProjectInfoTableComponent],
})
export class GForceComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/g-force")!;
}
