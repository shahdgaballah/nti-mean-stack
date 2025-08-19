import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-studentscard',
  standalone: true,
  imports: [],
  templateUrl: './studentscard.component.html',
  styleUrls: ['./studentscard.component.css']
})
export class StudentscardComponent {
  @Input() name: string = "placeholder";

  @Input() age: number = 0;

  @Input() major: string = "placeholder";


}
