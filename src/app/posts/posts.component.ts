import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Iposts } from '../shared classes and types/interfacePosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Iposts[]=[]

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(data=>{
      this.posts=data;
    })
  }

}
