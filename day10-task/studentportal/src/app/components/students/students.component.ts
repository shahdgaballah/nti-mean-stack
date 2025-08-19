import { Component } from '@angular/core';
import { StudentslistComponent } from '../studentslist/studentslist.component';
import { StudentsdetailsComponent } from '../studentsdetails/studentsdetails.component';
import { StudentscardComponent } from '../studentscard/studentscard.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [StudentslistComponent, StudentsdetailsComponent,],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

}
