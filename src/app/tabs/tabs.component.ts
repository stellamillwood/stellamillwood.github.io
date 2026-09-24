import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

export interface ImageTab {
  label: string;
  src: string;
  caption: string;
  width?: number;
  height?: number;
}

@Component({
  selector: 'app-image-tabs',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class ImageTabsComponent {
  @Input() tabs: ImageTab[] = [];
}
