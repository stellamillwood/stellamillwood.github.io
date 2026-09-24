import { Component } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from "@app/project-info-table/project-info-table.component";


@Component({
  selector: 'app-drop-the-beat',
  standalone: true,
  templateUrl: './drop-the-beat.component.html',
  styleUrl: './drop-the-beat.component.css',
  imports: [ProjectInfoTableComponent],
})
export class DropTheBeatComponent {
  project: Project = getProject("/projects/drop-the-beat");
}
