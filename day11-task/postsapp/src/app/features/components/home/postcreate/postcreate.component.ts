import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../../services/posts.services';

@Component({
  selector: 'app-postcreate',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './postcreate.component.html',
  styleUrl: './postcreate.component.css',
  providers:[PostsService]
})
export class PostcreateComponent {
  postForm: FormGroup;

  constructor(private postsService: PostsService) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postsService.createPost(this.postForm.value).subscribe(() => {
        alert('Post created successfully!');
        this.postForm.reset();
      });
    }
  }
}
