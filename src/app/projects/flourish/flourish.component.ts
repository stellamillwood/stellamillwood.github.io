import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-flourish',
  standalone: true,
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css',
})
export class FlourishComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/flourish")!;
}
