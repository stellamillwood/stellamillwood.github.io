import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";

@Component({
  selector: 'app-acdc',
  standalone: true,
  templateUrl: './acdc.component.html',
  styleUrl: './acdc.component.css',
  imports: [ProjectInfoTableComponent]
})
export class ACDCComponent {
  project: Project = getProject("/projects/acdc");
}
