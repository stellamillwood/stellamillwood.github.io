import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-imrs',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './imrs.component.html',
  styleUrl: './imrs.component.css',
})
export class IMRSComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/imrs")!;
}
