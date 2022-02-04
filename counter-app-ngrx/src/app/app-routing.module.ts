import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'counter', loadChildren:()=>import('./counter-folder/counter.module').then((m)=>{
    console.log(m)
    return m.CounterModule
  })},
  {path:'posts', loadChildren:()=>import('./posts/posts.module').then(m=>{
    return m.PostsModule
  })},
  {path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>{
    return m.AuthModule
  })},
  {path:'', redirectTo:'/home', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
