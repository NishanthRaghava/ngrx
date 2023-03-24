import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor() {

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

  onAddPost(){
    
    if(!this.postForm.valid){
      return;
    }
    console.log(this.postForm.value);
  }


}
