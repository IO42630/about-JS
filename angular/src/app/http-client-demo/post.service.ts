import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {

    baseUrl = 'https://io42630-default-rtdb.firebaseio.com/posts.json';
    options = {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        /* 'body' is default - data only */
        params: new HttpParams()
            .append('print', 'pretty') /* FireBase specific. */
            .append('foo', 'bar'),
        observe: undefined
    };

    errorSubject = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title, content };
        // Send Http request
        console.log(postData);
        this.http
            .post<{ name: string }>(
                this.baseUrl,
                postData
            )
            .subscribe(
                responseData => console.log(responseData),
                (error: HttpErrorResponse) => this.errorSubject.next(error.message)
            );
    }

    fetchPosts(): Observable<Post[]> {
        this.options.observe = 'response'; // this because TS lint complains.
        return this.http.get<any>(
            this.baseUrl,
            this.options
        )
            .pipe(map((response: HttpResponse<any>) => {
                    console.log(response);
                    const responseData: { [key: string]: Post } = response.body;
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArray;
                }),
                catchError(error => {
                    // do some analytics
                    return throwError(error);
                })
            );
    }

    deletePosts(): Observable<any> {
        return this.http.delete<any>(
            this.baseUrl,
            {
                observe: 'events'
            }
        ).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log(event.body);
            }
        }));
    }

}
