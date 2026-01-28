import { Component, Input } from '@angular/core'; 
import { MatTableModule } from '@angular/material/table';


@Component({ 
  selector: 'project-info-table', 
  templateUrl: './project-info-table.component.html', 
  styleUrls: ['./project-info-table.component.css' ], 
  standalone: true,
  imports: [ MatTableModule ] 
}) 
  
export class ProjectInfoTableComponent { 
  @Input() data: { label: string; value: string }[] | undefined;
  
  displayedColumns = ['label', 'value']; 
}