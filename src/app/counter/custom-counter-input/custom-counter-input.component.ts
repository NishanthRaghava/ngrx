import { Observable } from 'rxjs';
import { getText } from './../state/counter.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { changeText } from '../state/counter.action';
import { CounterState } from './../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value : number;
  text$: Observable<string>;
  

  constructor(private store: Store<{ counter: CounterState }>){

  }
  ngOnInit(){
    this.text$ = this.store.select(getText);
    // console.log('text is changed');
    // this.store.select(getText).subscribe((text) => { 
    //   console.log('text is changed');
    //   this.text =  text;
    // })
  }
  onAdd(){
    this.store.dispatch(customIncrement({count: +this.value})); //here the + sign is used to convert the string to number
    // this.value = null;
  }

  onChangeText(){
    this.store.dispatch(changeText());
  }


}
