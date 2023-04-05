import { addPost} from './../state/posts.action';
import { AppState } from './../../store/app.state';
import { Store, props } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/posts.model';
import { Postsservices } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>, private service: Postsservices ) {

  }

  ngOnInit(){
    this.postForm = new FormGroup({
      title: new FormControl(null, 
        [
          Validators.required , 
          Validators.minLength(6),
        ]),
      description: new FormControl(null,
        [
          Validators.required , 
          Validators.minLength(10),
        ])
    })
  }

  showDescriptionErrors(){
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm.touched && !descriptionForm.valid && descriptionForm.errors?.['required']  ){
        return 'description is required';
      }
      if(descriptionForm.touched && !descriptionForm.valid && descriptionForm.errors?.['minlength']){
        return '10 characters';
      }
      return null;
  }

  // onAddPost(){
    
  //   if(!this.postForm.valid){
  //     return;
  //   }
  //   console.log(this.postForm.value);
  //   const post: Post = { 
  //     title: this.postForm.value.title,
  //     description: this.postForm.value.description
  //   }
  //   this.store.dispatch(addPost({ post }));
  //   this.service.createposts({post:post});

  //   // this.store.dispatch(addPosts({ post }))
  // }

  onAddPost(){
    
    if(!this.postForm.valid){
       return;
    }
    const post: Post = { 
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({ post }));
    
    console.log(post);
    
  }
}
