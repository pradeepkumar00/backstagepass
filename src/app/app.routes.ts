import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'challenge',
    pathMatch: 'full'
  },
  {
    path: 'challenge',
    loadComponent: () =>
      import('./pages/challenge/challenge.component').then(m => m.ChallengeComponent)
  }
];
