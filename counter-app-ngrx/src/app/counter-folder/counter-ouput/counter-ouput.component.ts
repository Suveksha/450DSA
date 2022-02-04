import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { increment, reset, decrement } from '../state/counter.actions';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { observable, Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { AppState } from '../../store/app.store';
@Component({
  selector: 'app-counter-ouput',
  templateUrl: './counter-ouput.component.html',
  styleUrls: ['./counter-ouput.component.css']
})
export class CounterOuputComponent implements OnInit{

  // @Input() counter:number=0; 
  counterSubscription:Subscription | undefined;
  counter$:Observable<{counter:number}>|undefined;
  counter:number=0;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    // this.counterSubscription=this.store.select('counter').subscribe((data:any)=>{
    //   this.counter=data.counter
    // })

    // this.counter$=this.store.select('counter')
    // console.log(this.counter$)

    // this.store.select(getCounter).subscribe(data=>{
    //   this.counter=data
    // })

    this.counter$=this.store.select(getCounter)
  }

  // ngOnDestroy(): void {
  //      this.counterSubscription?.unsubscribe()
  // }

}
