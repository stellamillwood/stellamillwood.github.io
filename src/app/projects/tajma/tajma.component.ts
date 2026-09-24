import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Project, getProject } from '../projects-data';
import { ProjectInfoTableComponent } from '@app/project-info-table/project-info-table.component';
import { BeforeAfterComponent } from "@app/before-after/before-after.component";
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
  project: Project = getProject("/projects/tajma");
}
