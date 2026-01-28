import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AGoodSiteComponent } from './projects/agoodsite/agoodsite.component';
import { DigitalStewardshipComponent } from './projects/digital_stewardship/digital_stewardship.component';
import { FlourishComponent } from './projects/flourish/flourish.component';
import { IMRSComponent } from './projects/imrs/imrs.component';
import { ACDCComponent } from './projects/acdc/acdc.component';
import { GForceComponent } from './projects/g-force/g-force.component';
import { DropTheBeatComponent } from './projects/drop-the-beat/drop-the-beat.component';
import { ThesesComponent } from './projects/theses/theses.component';
import { TajmaComponent } from './projects/tajma/tajma.component';
import { StellaBudgetPrognosComponent } from './projects/stella-budget-prognos/stella-budget-prognos.component';
import { DigiPostComponent } from './projects/digi-post/digi-post.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/agoodsite', component: AGoodSiteComponent },
  { path: 'projects/digital-stewardship', component: DigitalStewardshipComponent },
  { path: 'projects/flourish', component: FlourishComponent },
  { path: 'projects/imrs', component: IMRSComponent },
  { path: 'projects/acdc', component: ACDCComponent },
  { path: 'projects/g-force', component: GForceComponent },
  { path: 'projects/drop-the-beat', component: DropTheBeatComponent },
  { path: 'projects/theses', component: ThesesComponent },
  { path: 'projects/tajma', component: TajmaComponent },
  { path: 'projects/stella-budget-prognos', component: StellaBudgetPrognosComponent },
  { path: 'projects/digi-post', component: DigiPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
