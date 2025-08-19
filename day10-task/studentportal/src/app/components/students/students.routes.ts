import { Routes } from "@angular/router";
import { StudentslistComponent } from "../studentslist/studentslist.component";
import { StudentsdetailsComponent } from "../studentsdetails/studentsdetails.component";

export const studentroutes: Routes= [
    {path: 'list', component: StudentslistComponent},
    {path: 'details/:id', component: StudentsdetailsComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'}
];