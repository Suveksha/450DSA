import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { increment, reset, decrement } from '../state/counter.actions';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { AppState } from '../../store/app.store';
@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment=new EventEmitter<void>()
  // @Output() decrement=new EventEmitter<void>()
  // @Output() reset=new EventEmitter<void>()

  constructor(private store:Store<AppState>) { }

  onIncrement()
  {
    // this.increment.emit()
    this.store.dispatch(increment())
  }
  onDecrement()
  {
    // this.decrement.emit()
    this.store.dispatch(decrement())
  }
  onReset()
  {
    // this.reset.emit()
    this.store.dispatch(reset())
  }

  ngOnInit(): void {
  }

}
