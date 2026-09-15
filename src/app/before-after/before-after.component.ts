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

    @Input() beforeCaption = '';
    @Input() afterCaption = '';

    @Input() beforeAlt = '';
    @Input() afterAlt = '';

    @Input() beforeWidth?: number;
    @Input() beforeHeight?: number;
    @Input() afterWidth?: number;
    @Input() afterHeight?: number;

    @Input() beforeLabel = 'Before'; 
    @Input() afterLabel = 'After'

    
    state: 'before' | 'after' = 'after'; 
  }
