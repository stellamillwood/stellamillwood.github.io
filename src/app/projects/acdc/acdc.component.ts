import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';

@Component({
  selector: 'app-acdc',
  standalone: true,
  templateUrl: './acdc.component.html',
  styleUrl: './acdc.component.css',
})
export class ACDCComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/acdc")!;
}
