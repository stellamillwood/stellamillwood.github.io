import { Component, ChangeDetectionStrategy,  signal } from '@angular/core';
import { PROJECTS, Project } from '../projects-data';
import { ProjectInfoTableComponent } from 'src/app/project-info-table/project-info-table.component';
import { BeforeAfterComponent } from "src/app/before-after/before-after.component";
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-tajma',
  standalone: true,
  templateUrl: './tajma.component.html',
  styleUrl: './tajma.component.css',
  imports: [ProjectInfoTableComponent, BeforeAfterComponent, MatExpansionModule], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TajmaComponent {
  project: Project = PROJECTS.find(p => p.route === "/projects/tajma")!;
  
  readonly panelOpenState = signal(false);
}
