import { createReducer, on } from "@ngrx/store"
import { setLoadingSpinner } from "./shared.actions"
import { initialState } from "./shared.state"

const _sharedReducer=createReducer(initialState, on(setLoadingSpinner, (state:any,action:any)=>{
    return {
        ...state,
        showLoading:action.status
    }
}))

export function SharedReducer(state: any, action: any){
    return _sharedReducer(state, action)
}