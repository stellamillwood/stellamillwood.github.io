import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-imrs',
  standalone: true,
  templateUrl: './imrs.component.html',
  styleUrl: './imrs.component.css',
})
export class IMRSComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/imrs")!;
}
