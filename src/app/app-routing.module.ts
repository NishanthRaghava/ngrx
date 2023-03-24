import { AddPostComponent } from './posts/add-post/add-post.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';
// import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


const routes : Routes =[
    {
        path:'', component:HomeComponent
    },
    {
        path:'counter',
        loadChildren: () => import('./counter/state/counter.module').then(m => m.CounterModule)
    },
    {
        path:'posts',
        loadChildren: () => import('./posts/state/posts.module').then(m=> m.PostsModule),
        // children: [
        //     {path:'add', component:AddPostComponent}
        // ]
    },
    {
        path:'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule  {}