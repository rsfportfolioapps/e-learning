import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/landing/home/home.module#HomeModule'
  },
  {
    path: 'home',
    loadChildren: './modules/main/home/home.module#HomeModule'
  },
  {
    path: 'certificate',
    loadChildren: './modules/main/certificate/certificate.module#CertificateModule'
  },
  {
    path: 'exercises',
    loadChildren: './modules/main/exercises/exercises.module#ExerciseModule'
  },
  {
    path: 'feedback',
    loadChildren: './modules/main/feedback/feedback.module#FeedbackModule'
  },
  {
    path: 'reference',
    loadChildren: './modules/main/reference/reference.module#ReferenceModule'
  },
  {
    path: 'simulation',
    loadChildren: './modules/main/simulation/simulation.module#SimulationModule'
  },
  {
    path: 'logout',
    loadChildren: './modules/landing/logout/logout.module#LogoutModule'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
