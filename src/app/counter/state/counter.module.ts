import { COUNTER_STATE_NAME } from './counter.selector';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomCounterInputComponent } from './../custom-counter-input/custom-counter-input.component';
import { CounterButtonComponent } from './../counter-button/counter-button.component';
import { CounterOutputComponent } from './../counter-output/counter-output.component';
import { CounterComponent } from './../counter/counter.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { counterReducer } from './counter.reducer';

const routes: Routes=[
    {
        path:'', component:CounterComponent
    },
];

@NgModule({
    declarations:[    CounterComponent,
        CounterOutputComponent,
        CounterButtonComponent,
        CustomCounterInputComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
    ]
})
export class CounterModule{}