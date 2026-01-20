import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-theses',
  standalone: true,
  templateUrl: './theses.component.html',
  styleUrl: './theses.component.css',
})
export class ThesesComponent {
    project: Project = PROJECTS.find(p => p.route === "/projects/theses")!;
}
