import { Component } from '@angular/core';

@Component({
  selector: 'app-flourish',
  imports: [],
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css',
})
export class FlourishComponent {
  title = "Drop the Beat";
  subtitle = "AR music sharing app";
  image = "assets/card_image.png";
  description = "The Shiba Inu is the smallest...";
}
