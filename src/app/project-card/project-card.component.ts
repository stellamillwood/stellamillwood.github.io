import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

/**
 * @title ProjectCardComponent
 */
@Component({
  selector: 'project-card',
  standalone: true,
  templateUrl: 'project-card.component.html',
  styleUrls: ['project-card.component.css'],
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() route!: string;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
