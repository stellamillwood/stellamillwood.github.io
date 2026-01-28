import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-imrs',
  standalone: true,
  templateUrl: './imrs.component.html',
  styleUrl: './imrs.component.css',
  imports: [ProjectInfoTableComponent],
})
export class IMRSComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/imrs")!;
}
