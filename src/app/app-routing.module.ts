import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'projects/agoodsite',
    loadComponent: () => import('./projects/agoodsite/agoodsite.component').then(m => m.AGoodSiteComponent)
  },
  {
    path: 'projects/digital-stewardship',
    loadComponent: () =>
      import('./projects/digital_stewardship/digital_stewardship.component').then(
        m => m.DigitalStewardshipComponent
      )
  },
  {
    path: 'projects/flourish',
    loadComponent: () => import('./projects/flourish/flourish.component').then(m => m.FlourishComponent)
  },
  {
    path: 'projects/imrs',
    loadComponent: () => import('./projects/imrs/imrs.component').then(m => m.IMRSComponent)
  },
  {
    path: 'projects/acdc',
    loadComponent: () => import('./projects/acdc/acdc.component').then(m => m.ACDCComponent)
  },
  {
    path: 'projects/g-force',
    loadComponent: () => import('./projects/g-force/g-force.component').then(m => m.GForceComponent)
  },
  {
    path: 'projects/drop-the-beat',
    loadComponent: () =>
      import('./projects/drop-the-beat/drop-the-beat.component').then(m => m.DropTheBeatComponent)
  },
  {
    path: 'projects/theses',
    loadComponent: () => import('./projects/theses/theses.component').then(m => m.ThesesComponent)
  },
  {
    path: 'projects/tajma',
    loadComponent: () => import('./projects/tajma/tajma.component').then(m => m.TajmaComponent)
  },
  {
    path: 'projects/stella-budget-prognos',
    loadComponent: () =>
      import('./projects/stella-budget-prognos/stella-budget-prognos.component').then(
        m => m.StellaBudgetPrognosComponent
      )
  },
  {
    path: 'projects/digi-post',
    loadComponent: () => import('./projects/digi-post/digi-post.component').then(m => m.DigiPostComponent)
  },
  // Dead or typo'd URLs land on About instead of an empty layout. build:ghpages
  // copies index.html to 404.html, so GitHub Pages hands every unknown path here.
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
