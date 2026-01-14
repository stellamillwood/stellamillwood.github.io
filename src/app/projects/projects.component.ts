import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { DropTheBeatComponent } from "./drop-the-beat/drop-the-beat.component";
import { ACDCComponent } from './acdc/acdc.component';
import { DesignSystemAGoodIdComponent } from './design-system-agoodid/design-system-agoodid.component';
import { DigiPostComponent } from './digi-post/digi-post.component';
import { DigitalStewardshipComponent } from './digital_stewardship/digital_stewardship.component';
import { FlourishComponent } from './flourish/flourish.component';
import { GForceComponent } from './g-force/g-force.component';
import { IMRSComponent } from './imrs/imrs.component';
import { StellaBudgetPrognosComponent } from './stella-budget-prognos/stella-budget-prognos.component';
import { TajmaComponent } from './tajma/tajma.component';
import { ThesesComponent } from './theses/theses.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, ACDCComponent, 
            DesignSystemAGoodIdComponent, DigiPostComponent, 
            DigitalStewardshipComponent, DropTheBeatComponent, 
            FlourishComponent, GForceComponent, 
            IMRSComponent, StellaBudgetPrognosComponent, 
            TajmaComponent, ThesesComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  acdc = new ACDCComponent();
  designsystemAgoodid = new DesignSystemAGoodIdComponent();
  digiPost = new DigiPostComponent();
  digitalStewardship = new DigitalStewardshipComponent();
  droptheBeat = new DropTheBeatComponent();
  flourish = new FlourishComponent();
  gForce = new GForceComponent();
  imrs = new IMRSComponent();
  stellabudgetPronos = new StellaBudgetPrognosComponent();
  tajma = new TajmaComponent();
  theses = new ThesesComponent();

  projects = [
    {
      title: "ACDC",
      subtitle: "ACDC",
      image: "assets/drop-beat.png",
      description: "Some description here...",
      route: "/projects/acdc"
    },
    {
      title: "Design System for Websites",
      subtitle: "Design System for Websites",
      image: "assets/gforce.png",
      description: "Some description here...",
      route: "/projects/design-system-agoodid"
    },
    {
      title: "DigiPost",
      subtitle: "DigiPost",
      image: "assets/drop-beat.png",
      description: "Some description here...",
      route: "/projects/digi-post"
    },
    {
      title: "Digital Stewardship",
      subtitle: "Flight tracking",
      image: "assets/gforce.png",
      description: "Some description here...",
      route: "/projects/g-force"
    },
    {
      title: "Drop the Beat",
      subtitle: "AR music sharing app",
      image: "assets/drop-beat.png",
      description: "Some description here...",
      route: "/projects/drop-the-beat"
    },
    {
      title: "G Force",
      subtitle: "Flight tracking",
      image: "assets/gforce.png",
      description: "Some description here...",
      route: "/projects/g-force"
    },
    {
      title: "Drop the Beat",
      subtitle: "AR music sharing app",
      image: "assets/drop-beat.png",
      description: "Some description here...",
      route: "/projects/drop-the-beat"
    }
    
  ];
  
}
