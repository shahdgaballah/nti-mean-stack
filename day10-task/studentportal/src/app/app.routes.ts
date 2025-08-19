import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { studentroutes } from './components/students/students.routes';
import { AboutComponent } from './components/about/about.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'students', loadComponent: () => import('./components/students/students.component').then(c=> c.StudentsComponent), children: studentroutes},
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundPageComponent}
];
