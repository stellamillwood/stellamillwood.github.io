import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-flourish',
  standalone: true,
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css',
  imports: [ProjectInfoTableComponent],
})
export class FlourishComponent {
  project: Project = getProject("/projects/flourish");
}
