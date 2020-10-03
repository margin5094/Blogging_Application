import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
  }
    enteredTitle='';
    enteredContent='';
    onAddPost(form:NgForm){
        if(form.invalid)
        {
            return;
        }
        const post:Post={
            id:form.value.id,
            title:form.value.title,
            content:form.value.content
       };
       this.postsService.addPost(form.value.title,form.value.content);
       form.resetForm();
    }
}
