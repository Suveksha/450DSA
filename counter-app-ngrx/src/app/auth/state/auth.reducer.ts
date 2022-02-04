import { createReducer, on } from "@ngrx/store"
import { loginSuccess } from "./auth.actions"
import { initialState } from "./auth.state"

const _authReducer= createReducer(initialState, on(loginSuccess, (state: any, action: { user: any })=>{
    return{
        ...state,
        user:action.user
    }
}))

export function AuthReducer(state:any, action:any)
{
    return _authReducer(state, action)
}