import { AuthEffects } from './auth/state/auth.effects';
import { environment } from './../environments/environment.prod';
import { appReducer } from './store/app.state';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter/counter.component';
// import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
// import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
// import { counterReducer } from './counter/state/counter.reducer';
// import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';
// import { AddPostComponent } from './posts/add-post/add-post.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component'


@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // CounterOutputComponent,
    // CounterButtonComponent,
    // CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    // PostsListComponent,
    // AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // StoreModule.forRoot(appReducer),
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({

      logOnly: environment.production, 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
