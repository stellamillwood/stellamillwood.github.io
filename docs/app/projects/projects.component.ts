import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { PROJECTS, Project } from './projects-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
