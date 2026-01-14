import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-flourish',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css',
})
export class FlourishComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/flourish")!;
}
