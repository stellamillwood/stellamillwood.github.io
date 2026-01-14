import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';

@Component({
  selector: 'app-digi-post',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './digi-post.component.html',
  styleUrl: './digi-post.component.css',
})
export class DigiPostComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/digi-post")!;
}
