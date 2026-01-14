import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-tajma',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './tajma.component.html',
  styleUrl: './tajma.component.css',
})
export class TajmaComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/tajma")!;
}
