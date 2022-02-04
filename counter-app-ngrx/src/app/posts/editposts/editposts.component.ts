import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.store';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute,
    private store:Store<AppState>,
    private router:Router) { }
    

    post:Post|undefined
    postForm:FormGroup|any
    postSubscription:Subscription|undefined
  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      console.log(data.get('id'))
      const id=data.get('id')
      this.postSubscription=this.store.select(getPostById, {id}).subscribe(data=>{
        this.post=data
        console.log("Post",this.post)
        this.createForm()
      })
    })

  }

  createForm()
  {
    this.postForm=new FormGroup({
      title:new FormControl(this.post?.title, [Validators.minLength(6), Validators.required]),
      description:new FormControl(this.post?.description, [Validators.minLength(6), Validators.required])
    })
  }

  onUpdatePost()
  {
    if(!this.postForm.valid)
    return

    const title=this.postForm.value.title
    const description=this.postForm.value.description

    const post:Post|any={
      id:this.post?.id,
      title,
      description
    }

    this.store.dispatch(updatePost({post}))
    this.router.navigate(['posts'])
  }

  ngOnDestroy(): void {
      this.postSubscription?.unsubscribe()
  }
}
