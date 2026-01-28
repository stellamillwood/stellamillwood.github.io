import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-digital-stewardship',
  standalone: true,
  templateUrl: './digital_stewardship.component.html',
  styleUrl: './digital_stewardship.component.css',
  imports: [ProjectInfoTableComponent],
})
export class DigitalStewardshipComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/digital-stewardship")!;
}
