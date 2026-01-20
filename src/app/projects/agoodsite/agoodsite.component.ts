import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';


@Component({
  selector: 'app-agoodsite',
  standalone: true,
  templateUrl: './agoodsite.component.html',
  styleUrls: ['./agoodsite.component.css'],
})
export class AGoodSiteComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/agoodsite")!;
  }
