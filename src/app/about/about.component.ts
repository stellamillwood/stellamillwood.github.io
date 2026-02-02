
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,          // ✅ important
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const video = document.querySelector('video') as HTMLVideoElement | null;

    if (video) {
      video.muted = true;
      video.play().catch(() => {
      });
    }
  }
}
