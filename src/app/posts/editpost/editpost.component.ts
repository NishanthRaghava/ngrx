import { updatePost } from './../state/posts.action';
import { Subscription } from 'rxjs';
import { getpostById } from './../state/posts.selector';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Post } from './../../models/posts.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit, OnDestroy {
  post: Post;
  postForm : FormGroup;
  postSubsrciption: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
     ){}

  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      // console.log(params.get('id')); 
      const id = params.get('id');
      this.postSubsrciption = this.store.select(getpostById, {id}).subscribe((data)=>{
        this.post = data;
        // console.log(this.post);
        this.createForm();
      })
    });
  }

  createForm(){
    this.postForm = new FormGroup({
      title : new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    });
  }
  ngOnDestroy(): void {
    if(this.postSubsrciption){
      this.postSubsrciption.unsubscribe();
    }
  }

  onSubmit(){
     if(!this.postForm.valid){
      return;
     }
     const title = this.postForm.value.title;
     const description = this.postForm.value.description;

    const post : Post={
      id: this.post.id,
      title,
      description,
    }
     //dispatch the action
     this.store.dispatch(updatePost({post}));
     this.router.navigate(['posts'])
  }
}
