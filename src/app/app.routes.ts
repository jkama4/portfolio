import { Routes } from '@angular/router';
import { Experience } from './pages/experience/experience';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'experience', component: Experience }
];
