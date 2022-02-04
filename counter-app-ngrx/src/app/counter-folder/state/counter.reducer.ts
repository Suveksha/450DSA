import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { increment, decrement, reset, customIncrement, changePersonName } from "./counter.actions"
const _counterReducer=createReducer(initialState, on(increment, (state)=>{
    return{
        ...state,
        counter:state.counter+1
    }
}),

on(decrement, (state)=>{
    return{
        ...state,
        counter:state.counter-1
    }
}),

on(reset, (state)=>{
    return{
        ...state,
        counter:0
    }
}
),
on(customIncrement,(state,action)=>{
    console.log(action)
    return{
        ...state,
        counter:state.counter+action.count
    }
}),
on(changePersonName,(state)=>{
    return{
        ...state,
        personName:"Chettri"
    }
})
);

export function counterReducer(state:any, action:any)
{
    return _counterReducer(state,action)
}