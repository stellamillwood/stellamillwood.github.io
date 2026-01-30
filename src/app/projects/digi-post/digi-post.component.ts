import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from "src/app/project-info-table/project-info-table.component";
import { BeforeAfterComponent } from "src/app/before-after/before-after.component";

@Component({
  selector: 'app-digi-post',
  standalone: true,
  templateUrl: './digi-post.component.html',
  styleUrl: './digi-post.component.css',
  imports: [ProjectInfoTableComponent, BeforeAfterComponent],
})
export class DigiPostComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/digi-post")!;
}
