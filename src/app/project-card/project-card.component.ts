import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title ProjectCardComponent
 */
@Component({
  selector: 'project-card',
  templateUrl: 'project-card.component.html',
  styleUrl: 'project-card.component.css',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() description!: string;
}
