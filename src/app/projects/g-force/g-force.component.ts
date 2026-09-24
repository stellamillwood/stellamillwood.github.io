import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";
import { ImageTabsComponent } from "@app/image-tabs/image-tabs.component";


@Component({
  selector: 'app-g-force',
  standalone: true,
  templateUrl: './g-force.component.html',
  styleUrl: './g-force.component.css',
  imports: [ProjectInfoTableComponent, ImageTabsComponent],
})
export class GForceComponent {
  project: Project = getProject("/projects/g-force");
}
