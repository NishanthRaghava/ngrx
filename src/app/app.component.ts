import { autologin } from './auth/state/auth.action';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { getLoading, getErrorMessage } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;
  
  constructor(private store: Store<AppState>){}
  ngOnInit(){
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autologin());
  }
}
