import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";
import { BeforeAfterComponent } from "@app/before-after/before-after.component";

@Component({
  selector: 'app-digi-post',
  standalone: true,
  templateUrl: './digi-post.component.html',
  styleUrl: './digi-post.component.css',
  imports: [ProjectInfoTableComponent, BeforeAfterComponent],
})
export class DigiPostComponent {
  project: Project = getProject("/projects/digi-post");
}
