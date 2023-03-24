import { getCounter } from './../state/counter.selector';
import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store'
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // counter : number; 
  counter$  : Observable<number>
  // counterSubscripton : Subscription;
  constructor(private store: Store<{ counter: CounterState }> ){}

  ngOnInit(): void {
    // this.counterSubscripton = this.store.select('counter').subscribe((data)=>{
    //   this.counter = data.counter;
    // })
    this.counter$ =this.store.select(getCounter);  
    // console.log('number is changed');
    
    
    
  }

  ngOnDestroy(): void {
  //   if(this.counterSubscripton){
  //     this.counterSubscripton.unsubscribe();
  //   }
   }
  
}
