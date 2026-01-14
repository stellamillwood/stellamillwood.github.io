import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';

@Component({
  selector: 'app-acdc',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './acdc.component.html',
  styleUrl: './acdc.component.css',
})
export class ACDCComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/acdc")!;
}
