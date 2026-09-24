import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";
import { BeforeAfterComponent } from "@app/before-after/before-after.component";


@Component({
  selector: 'app-digital-stewardship',
  standalone: true,
  templateUrl: './digital-stewardship.component.html',
  styleUrl: './digital-stewardship.component.css',
  imports: [ProjectInfoTableComponent, BeforeAfterComponent],
})
export class DigitalStewardshipComponent {
  project: Project = getProject("/projects/digital-stewardship");
}
