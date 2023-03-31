import { Observable } from 'rxjs';
import { Post } from './../models/posts.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class Postsservices{
    constructor(private http: HttpClient){
    }
    // createposts({post:Post}){
    //     console.log(Post);
    //     this.http.post('https://redux-73e30-default-rtdb.firebaseio.com/posts.json', Post)
    //     .subscribe((res)=>{
    //       console.log(res);
    //     })
    // }

    createposts(post:Post):Observable<any>{
        return this.http.post<any>('https://redux-73e30-default-rtdb.firebaseio.com/posts.json', post);
    }
}