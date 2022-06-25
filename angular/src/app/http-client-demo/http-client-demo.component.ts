import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
    selector: 'app-http-client-demo',
    templateUrl: 'http-client-demo.component.html'
})
export class HttpClientDemoComponent implements OnInit {

    loadedPosts: Post[] = [];
    foo: { [key: string]: string }; // any stirng key, and string value
    isFetching = false;

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    onCreatePost(postData: { title: string; content: string }) {
        // Send Http request
        console.log(postData);
        this.http
            .post<{ name: string }>(
                'https://io42630-default-rtdb.firebaseio.com/posts.json',
                postData
            )
            .subscribe(responseData => {
                console.log(responseData);
            });
    }

    onFetchPosts() {
        this.isFetching = true;
        this.http.get<any>('https://io42630-default-rtdb.firebaseio.com/posts.json')
            .pipe(map((responseData: { [key: string]: Post }) => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({...responseData[key], id: key});
                    }
                }
                return postsArray;
            }))
            .subscribe(responseData => {
                this.isFetching = false;
                this.loadedPosts = [];
                responseData.forEach((post: Post) => this.loadedPosts.push(post));
                console.log(responseData);
            });
    }

    onClearPosts() {
        this.loadedPosts = [];
    }
}
