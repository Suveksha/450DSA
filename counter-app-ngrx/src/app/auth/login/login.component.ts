import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  loginForm:FormGroup|any
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onLogin()
  {
    console.log("Login", this.loginForm)
    const email=this.loginForm.value.email
    const password=this.loginForm.value.password
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(loginStart({email, password}))
  }

}
