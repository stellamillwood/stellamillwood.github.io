import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";

@Component({
  selector: 'app-acdc',
  standalone: true,
  templateUrl: './acdc.component.html',
  styleUrl: './acdc.component.css',
  imports: [ProjectInfoTableComponent]
})
export class ACDCComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/acdc")!;
}
