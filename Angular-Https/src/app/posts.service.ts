import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from 'src/models/post.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export default class PostsService {
  constructor(private httpClient: HttpClient) {}

  addPost(post: Post) {
    //const newPost = { title, content };

    this.httpClient
      .post(
        'https://angular-https-66c4c-default-rtdb.firebaseio.com/posts.json',
        post
      )

      .subscribe((data: any) => {
        console.log(data);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    const posts = this.httpClient
      .get<{ [key: string]: Post }>(
        'https://angular-https-66c4c-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Frontend-Framework': 'Angular',
          }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData: any) => {
          const postsArray: Post[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );

    return posts;
  }

  deletePosts() {
    return this.httpClient.delete(
      'https://angular-https-66c4c-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
