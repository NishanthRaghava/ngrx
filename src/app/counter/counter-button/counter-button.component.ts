import { CounterState } from './../state/counter.state';
import { increment, decrement, reset } from './../state/counter.action';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {


  constructor(private store: Store<{ counter: CounterState }> ){}

  ngOnInit(): void {
    
  }

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
   this.store.dispatch(reset())
  }

}
