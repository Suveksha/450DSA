import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "../add-post/add-post.component";
import { EditpostsComponent } from "./editposts/editposts.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selectors";


const routes:Routes=[
    {path:'', component:PostsListComponent, children:[
        {path:'add', component:AddPostComponent},
        {path:'edit/:id', component:EditpostsComponent}
      ]},
]
@NgModule({
    declarations:[PostsListComponent, AddPostComponent, EditpostsComponent],
    imports:[CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forFeature(POST_STATE_NAME, postsReducer)]
})

export class PostsModule{

}