import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-http-client-demo',
    templateUrl: 'http-client-demo.component.html'
})
export class HttpClientDemoComponent implements OnInit, OnDestroy {

    loadedPosts: Post[] = [];
    foo: { [key: string]: string }; // any stirng key, and string value
    isFetching = false;
    error: string = null;
    errorSub: Subscription;


    constructor(private http: HttpClient, private postService: PostService) {}

    ngOnInit() {
        this.errorSub = this.postService.errorSubject
            .subscribe((errorMessage) => this.error = errorMessage);
    }

    onCreatePost(postData: { title: string; content: string }) {
        this.postService.createAndStorePost(postData.title, postData.content);
    }

    onGetPosts() {
        this.isFetching = true;
        this.postService.fetchPosts().subscribe(posts => {
            this.loadedPosts = posts;
            this.isFetching = false;
        }, (error: HttpErrorResponse) => {
            this.loadedPosts = [];
            this.isFetching = false;
            this.error = error.message;
        });
    }

    onDeletePosts() {
        this.postService.deletePosts().subscribe(() => this.loadedPosts = []);
    }

    onHandleError() {
        this.error = null;
    }

    ngOnDestroy(): void {
        this.errorSub.unsubscribe();
    }

}
