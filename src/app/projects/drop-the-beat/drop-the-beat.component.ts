import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-drop-the-beat',
  standalone: true,
  templateUrl: './drop-the-beat.component.html',
  styleUrl: './drop-the-beat.component.css',
})
export class DropTheBeatComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/drop-the-beat")!;
}
