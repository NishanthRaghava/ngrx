import { mergeMap, map, switchMap } from 'rxjs/operators';
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPost, loadPostSuccess, updatePost, updatePostSuccess } from './posts.action';
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

    addPost$ = createEffect(() => {
        return this.action$.pipe(
          ofType(addPost),
          mergeMap((action) => {
            console.log(action)
            return this.service.createposts(action.post).pipe(
              map((data) => {
                console.log(data,"servic post")
                const post = { ...action.post,id:data.name };
                return addPostSuccess({ post });
              })
            );
          })
        );
      }); 
    
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

    updatePost$ = createEffect(()=>{
      return this.action$.pipe(
        ofType(updatePost),
        switchMap((action)=>{
          return this.service.updateposts(action.post).pipe(
            map((data)=>{
              return updatePostSuccess({ post:action.post })
            })
          )
        })
      )
    });
    deletePost$ = createEffect(()=>{
      return this.action$.pipe(
        ofType(deletePost),
        switchMap((action)=>{
          return this.service.deleteposts(action.id).pipe(
            map((data)=>{
              return deletePostSuccess({id: action.id})
            })
          )
        })
      )
    })
}