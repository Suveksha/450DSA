import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.store';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';
import { PostsState } from '../state/posts.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts:Observable<Post[]>|undefined;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts=this.store.select(getPosts)
  }

  onDeletePost(id:string|any)
  {
    if(confirm('Are you sure you want to delete this post?'))
    {
      console.log("Deleted")
      this.store.dispatch(deletePost({id}))
    }
  }

}
