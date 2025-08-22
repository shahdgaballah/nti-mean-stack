import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../../services/posts.services';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule, RouterModule],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
  providers: [PostsService]
})
export class PostlistComponent {
  posts: any;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.posts = data || [];
        },
        error: (err)=>{
          console.log(err);
        },
        complete: ()=>{

        }
      }
    );
  }

  deletePost(id: number) {
  this.postsService.deletePost(id).subscribe({
    next: (res) => {
      console.log(res);
      this.getPosts();
    },
    error: (err) => console.log(err),
    complete: () => console.log("complete")
  });
}

}
