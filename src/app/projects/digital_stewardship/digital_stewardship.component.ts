import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-digital-stewardship',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './digital_stewardship.component.html',
  styleUrl: './digital_stewardship.component.css',
})
export class DigitalStewardshipComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/digital-stewardship")!;
}
