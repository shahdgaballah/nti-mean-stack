import { Component } from '@angular/core';
import { StudentscardComponent } from '../studentscard/studentscard.component';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentslist',
  standalone: true,
  imports: [StudentscardComponent, RouterLink, CommonModule],
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent {
  students = [
  { id: 1, parentName: "shahd", parentAge: 20, parentMajor: "computer science" },
  { id: 2, parentName: "sama", parentAge: 21, parentMajor: "information systems" },
  { id: 3, parentName: "laila", parentAge: 22, parentMajor: "software engineering" }
];
}
