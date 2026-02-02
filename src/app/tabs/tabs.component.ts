import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgFor } from '@angular/common';

export interface ImageTab {
  label: string;
  src: string;
  caption: string;
}

@Component({
  selector: 'app-image-tabs',
  standalone: true,
  imports: [MatTabsModule, NgFor],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class ImageTabsComponent {
  @Input() tabs: ImageTab[] = [];
}
