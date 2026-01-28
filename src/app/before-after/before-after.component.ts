import { Component, Input } from '@angular/core';
import { MatButtonToggleGroup, MatButtonToggle } from "@angular/material/button-toggle"; 
import { FormsModule } from '@angular/forms';

@Component({ 
  selector: 'app-before-after', 
  templateUrl: './before-after.component.html',
  standalone: true, 
  styleUrls: ['./before-after.component.css'],
  imports: [MatButtonToggleGroup, MatButtonToggle, FormsModule] 
}) 
  
  export class BeforeAfterComponent { 
    @Input() beforeSrc!: string; 
    @Input() afterSrc!: string; 
    
    state: 'before' | 'after' = 'after'; 
  }