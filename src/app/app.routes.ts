import { Routes } from '@angular/router';
import { Education } from './pages/education/education';
import { Experience } from './pages/experience/experience';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
  { path: '', component: Homepage, title: 'Jayden Kashani Maleki' },
  { path: 'experience', component: Experience, title: 'Experience · Jayden Kashani Maleki' },
  { path: 'education', component: Education, title: 'Education · Jayden Kashani Maleki' },  { path: '**', redirectTo: '' },
];
