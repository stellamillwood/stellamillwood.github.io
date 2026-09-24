import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-imrs',
  standalone: true,
  templateUrl: './imrs.component.html',
  styleUrl: './imrs.component.css',
  imports: [ProjectInfoTableComponent],
})
export class IMRSComponent {
  project: Project = getProject("/projects/imrs");
}
