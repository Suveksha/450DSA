import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CustomInputComponent } from "../custom-input/custom-input.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOuputComponent } from "./counter-ouput/counter-ouput.component";
import { CounterComponent } from "./counter/counter.component";
import { counterReducer } from "./state/counter.reducer";
import { COUNTER_STATE_NAME } from "./state/counter.selectors";

const routes:Routes=[
    {path:'', component:CounterComponent}
]
@NgModule({
    declarations: [
        CounterComponent,
        CounterOuputComponent,
        CounterButtonsComponent,
        CustomInputComponent,
    ],
    imports:[CommonModule, RouterModule.forChild(routes), FormsModule, StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)]
})

export class CounterModule{

}