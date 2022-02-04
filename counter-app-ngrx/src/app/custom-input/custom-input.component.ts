import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changePersonName, customIncrement } from '../counter-folder/state/counter.actions';
import { getPersonName } from '../counter-folder/state/counter.selectors';
import { CounterState } from '../counter-folder/state/counter.state';
import { AppState } from '../store/app.store';
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  value:number=0;
  // personName:string=''
  personName$:Observable<string>|undefined;
  ngOnInit(): void {
    // this.store.select(getPersonName).subscribe(data=>{
    //   this.personName=data
    // })

    this.personName$=this.store.select(getPersonName)
  }

  onAdd()
  {
    this.store.dispatch(customIncrement({count:+this.value}))

  }

  onChangeText()
  {
    this.store.dispatch(changePersonName())
  }

}
