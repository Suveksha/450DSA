import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/Service/auth.services";
import { AppState } from "src/app/store/app.store";
import { setLoadingSpinner } from "src/app/store/Shared/shared.actions";
import { loginStart, loginSuccess } from "./auth.actions";


@Injectable()

export class AuthEffects{
    constructor(private actions$:Actions,
        private authService:AuthService,
        private store:Store<AppState>){}

    login$=createEffect(()=>{
        return this.actions$.pipe(ofType(loginStart), exhaustMap((action)=>{
            return this.authService.login(action.email, action.password).pipe(map((data:any)=>{
                const user=this.authService.formatUser(data)
                this.store.dispatch(setLoadingSpinner({status:false}))
                return loginSuccess({user})
            }))
        }))
    })
}