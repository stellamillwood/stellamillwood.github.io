import { Component } from '@angular/core';
import { PROJECTS, Project } from '../projects/projects-data';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'vertical-menu',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterModule, NgFor],
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css'],
})
export class VerticalMenuComponent {
  projects = PROJECTS;
}

