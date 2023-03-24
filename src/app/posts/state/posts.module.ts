import { POSTS_STATE_NAME } from './posts.selector';
import { StoreModule } from '@ngrx/store';
import { AddPostComponent } from './../add-post/add-post.component';
import { PostsListComponent } from './../posts-list/posts-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { postsReducer } from './posts.reducer';

const routes: Routes =[
    {
        path:'',
        component:PostsListComponent,
        children: [
            {path:'add', component:AddPostComponent}
        ]
    },
];

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POSTS_STATE_NAME,postsReducer),
    ],
    declarations:[
         PostsListComponent,
         AddPostComponent
    ]
})
export class PostsModule{

}