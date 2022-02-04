import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter:number=0

  onIncrement()
  {
    this.counter+=1
  }

  onDecrement(){
    this.counter-=1
  }

  onReset(){
    this.counter=0
  }
  ngOnInit(): void {
  }

}
