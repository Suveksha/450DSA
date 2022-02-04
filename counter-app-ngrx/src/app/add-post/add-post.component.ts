import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from '../models/posts.model';
import { addPost } from '../posts/state/posts.actions';
import { AppState } from '../store/app.store';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm:FormGroup|any;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm=new FormGroup({
      title: new FormControl(null,[ Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

  }

  onAddPost()
  {
    console.log(this.postForm)

    const post:Post={
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }

    this.store.dispatch(addPost({post}))
  }

}
