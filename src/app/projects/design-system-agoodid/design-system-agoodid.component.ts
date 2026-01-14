import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-design-system-agoodid',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './design-system-agoodid.component.html',
  styleUrls: ['./design-system-agoodid.component.css'],
})
export class DesignSystemAGoodIdComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/design-system-agoodid")!;
  }
