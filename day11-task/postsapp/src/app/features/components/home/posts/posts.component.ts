import { Component } from '@angular/core';
import { PostlistComponent } from '../postlist/postlist.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostlistComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

}
