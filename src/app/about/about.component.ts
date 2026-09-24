
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

  /** Sep 2022 – Jun 2023 research assistant / UX engineer stint at SU. */
  private static readonly PRIOR_EXPERIENCE_MONTHS = 10;
  /** Continuous UX engineer employment, started Nov 2023. */
  private static readonly CONTINUOUS_START = new Date(2023, 10, 1);

  get yearsOfExperience(): string {
    const now = new Date();
    const monthsSinceStart =
      (now.getFullYear() - AboutComponent.CONTINUOUS_START.getFullYear()) * 12 +
      (now.getMonth() - AboutComponent.CONTINUOUS_START.getMonth());
    const totalMonths = AboutComponent.PRIOR_EXPERIENCE_MONTHS + monthsSinceStart;
    
    // Round to the nearest half-year, bumping up once 2+ months past a half-year mark.
    const halfYearBase = Math.floor(totalMonths / 6) * 6;
  
    const remainder = totalMonths - halfYearBase;
    const roundedMonths = remainder >= 2 ? halfYearBase + 6 : halfYearBase;
    const years = roundedMonths / 12;

    return Number.isInteger(years) ? `${years}` : years.toFixed(1);
  }

  ngAfterViewInit(): void {
    const video = document.querySelector('video') as HTMLVideoElement | null;

    if (video) {
      video.muted = true;
      video.play().catch(() => {
      });
    }
  }
}
