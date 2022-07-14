import { Component, OnInit } from '@angular/core';
import { postList } from '../models/posts-response.models';
import { PostsService } from '../services/posts.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
   postsList: postList[]=[];
   isVisible: boolean = false;

  constructor( private postsServ:PostsService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.postsServ.getPosts().subscribe((data)=>{
      this.postsList = data;
    });
    this.postsServ.postPosts().subscribe();
    this.postsServ.deletePosts(1).subscribe();
  }
  deleteItem(id: number){
    this.postsServ.deletePosts(id).subscribe()
    this._snackBar.open('Post deleted successfully')
  }

  toggleComments(){
    this.isVisible = !this.isVisible
  }
}
