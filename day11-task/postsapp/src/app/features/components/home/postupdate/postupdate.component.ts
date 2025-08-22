import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../../../services/posts.services';

@Component({
  selector: 'app-postupdate',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,HttpClientModule],
  templateUrl: './postupdate.component.html',
  styleUrl: './postupdate.component.css',
  providers: [PostsService]
})
export class PostupdateComponent {
  postForm: FormGroup;
  postId: number =0;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.getPost(this.postId);
    });

  }

  getPost(id: number) {
    this.postsService.getPost(id).subscribe((data) => {
      console.log(data);
      
      this.postForm.patchValue({
        title: data.title,
        body: data.body,
      });

    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postsService.updatePost(this.postId, this.postForm.value).subscribe(() => {
        alert('Post updated successfully!');
      });
    }
  }

}
