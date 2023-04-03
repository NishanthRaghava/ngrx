import { mergeMap, map } from 'rxjs/operators';
import { createPost, createPostSuccess, loadPost, loadPostSuccess } from './posts.action';
import { Router } from '@angular/router';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Postsservices } from './../../services/posts.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";

@Injectable()

export class PostsEffect{
    constructor(
        private action$: Actions,
        private service: Postsservices,
        private store: Store<AppState>,
        private router: Router,
    ){}

    // addPost$ = createEffect(() => {
    //     return this.action$.pipe(
    //       ofType(createPost),
    //       mergeMap((action) => {
    //         console.log(action)
    //         return this.service.createposts(action.post).pipe(
    //           map((data) => {
    //             console.log(data,"servic post")
    //             const post = { ...action.post,id:data.name };
    //             return createPostSuccess({ post });
    //           })
    //         );
    //       })
    //     );
    //   }); 
    
    loadPost$ = createEffect(()=>{
      return this.action$.pipe(
        ofType(loadPost),
        mergeMap((action)=>{
          return this.service.getposts().pipe(
            map((posts)=>{
              // console.log(data,"get data from the service");
              return loadPostSuccess({ posts })
            })
          )
        })
      )
    });
}