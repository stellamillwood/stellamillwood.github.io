import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { VerticalMenuComponent } from 'src/app/vertical-menu/vertical-menu.component';


@Component({
  selector: 'app-agoodsite',
  standalone: true,
  imports: [VerticalMenuComponent],
  templateUrl: './agoodsite.component.html',
  styleUrls: ['./agoodsite.component.css'],
})
export class DesignSystemAGoodIdComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/agoodsite")!;
  }
