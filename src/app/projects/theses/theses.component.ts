import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-theses',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './theses.component.html',
  styleUrl: './theses.component.css',
})
export class ThesesComponent {
    project: Project = PROJECTS.find(p => p.route === "/projects/theses")!;
}
