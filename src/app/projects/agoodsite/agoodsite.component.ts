import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-agoodsite',
  standalone: true,
  templateUrl: './agoodsite.component.html',
  styleUrls: ['./agoodsite.component.css'],
  imports: [ProjectInfoTableComponent],
})
export class AGoodSiteComponent {
  project: Project = getProject("/projects/agoodsite");
  }
