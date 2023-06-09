import { Observable, map } from 'rxjs';
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

    createposts(post:Post):Observable<{name: string}>{
        return this.http.post<{name: string}>
        ('https://redux-73e30-default-rtdb.firebaseio.com/posts.json', post);
    }

    getposts(): Observable<Post[]>{
        return this.http
        .get<Post[]>(`https://redux-73e30-default-rtdb.firebaseio.com/posts.json`)
        .pipe(map((data)=>{
            const posts: Post[]= [];
            for (let key in data){
                posts.push({...data[key], id: key})
            }
            return posts;
        }))
    }
    updateposts(post:Post){
        const postData = {[post.id]: {title: post.title, description: post.description}}
        return this.http.patch(`https://redux-73e30-default-rtdb.firebaseio.com/posts.json`,postData);
    }
    deleteposts(id: String){
        return this.http.delete(`https://redux-73e30-default-rtdb.firebaseio.com/posts/${id}.json`)
    }
}