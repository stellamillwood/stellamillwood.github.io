import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-agoodsite',
  standalone: true,
  templateUrl: './agoodsite.component.html',
  styleUrls: ['./agoodsite.component.css'],
  imports: [ProjectInfoTableComponent],
})
export class AGoodSiteComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/agoodsite")!;
  }
