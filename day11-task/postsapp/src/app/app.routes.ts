import { Routes } from '@angular/router';
import { PostcreateComponent } from './features/components/home/postcreate/postcreate.component';
import { NotFoundPageComponent } from './features/components/not-found-page/not-found-page.component';
import { PostupdateComponent } from './features/components/home/postupdate/postupdate.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: ()=> import('./features/components/home/posts/posts.component').then(c=> c.PostsComponent)},
    { path: 'posts', loadComponent: ()=> import('./features/components/home/posts/posts.component').then(c=> c.PostsComponent)},
    {path: 'addpost', component: PostcreateComponent},
    { path: 'update/:id', component: PostupdateComponent},
    {path: '**', component: NotFoundPageComponent},

];
