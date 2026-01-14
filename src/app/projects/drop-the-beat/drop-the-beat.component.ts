import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-drop-the-beat',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './drop-the-beat.component.html',
  styleUrl: './drop-the-beat.component.css',
})
export class DropTheBeatComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/drop-the-beat")!;
}
