import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';

// Angular Material imports
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-theses',
  standalone: true,
  templateUrl: './theses.component.html',
  imports: [MatIconModule, MatButtonModule],
  styleUrl: './theses.component.css',
})
export class ThesesComponent {
    project: Project = PROJECTS.find(p => p.route === "/projects/theses")!;
}
