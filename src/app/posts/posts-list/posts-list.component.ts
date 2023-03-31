import { loadPost, loadPostSuccess } from './../state/posts.action';
import { AppState } from './../../store/app.state';
import { getPosts } from './../state/posts.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from './../../models/posts.model'
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  posts : Observable<Post[]>; 
  constructor(private store: Store<AppState>){
    
  }

  ngOnInit(){
    this.posts = this.store.select(getPosts); 
    // here we can use subscribe principle also.
    this.store.dispatch(loadPost());
  }

  onDelete(id: string){
    if (confirm('are you sure')){
      this.store.dispatch(deletePost({id}))
      
    }

  }
}
