import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-tajma',
  standalone: true,
  templateUrl: './tajma.component.html',
  styleUrl: './tajma.component.css',
})
export class TajmaComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/tajma")!;
}
