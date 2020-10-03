import { Component, OnInit ,Input} from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts=[
  //   {title:'First Post',content:"This is the First post's content"},
  //   {title:'Second Post',content:"This is the Second post's content"},
  //   {title:'Third Post',content:"This is the Third post's content"},
  // ];
  posts:Post[]=[];
  private postsSub:Subscription;
  postsService: PostsService;
  constructor(public postsService1:PostsService) {}

  ngOnInit(): void {
    this.posts=this.postsService1.getPosts();
    this.postsSub=this.postsService1.getPostUpdateListener().subscribe((posts:Post[])=>
    {this.posts=posts});
  }
  ngOnDestroy()
  {
    this.postsSub.unsubscribe();
  }
}
