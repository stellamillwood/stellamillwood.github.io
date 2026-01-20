import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';

@Component({
  selector: 'app-digi-post',
  standalone: true,
  templateUrl: './digi-post.component.html',
  styleUrl: './digi-post.component.css',
})
export class DigiPostComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/digi-post")!;
}
