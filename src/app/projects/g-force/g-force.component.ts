import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-g-force',
  standalone: true,
  templateUrl: './g-force.component.html',
  styleUrl: './g-force.component.css',
})
export class GForceComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/g-force")!;
}
