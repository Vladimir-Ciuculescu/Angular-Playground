import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from 'src/models/post.model';
import PostsService from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts!: Post[];
  isLoading: boolean = false;
  errorMessage!: any;

  postForm!: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
    });

    this.onFetchPosts();
  }

  onCreatePost() {
    const newPost = {
      title: this.postForm.get('title')!.value,
      content: this.postForm.get('content')!.value,
    };

    this.postsService.addPost(newPost);
    this.loadedPosts = [...this.loadedPosts, newPost];

    this.postForm.reset();
  }

  onFetchPosts() {
    this.isLoading = true;

    this.postsService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.loadedPosts = posts;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.error;
      }
    );
    this.isLoading = false;
  }

  onDeletePosts() {
    this.postsService.deletePosts().subscribe();
    this.loadedPosts = [];
    // Send Http request
  }
}
