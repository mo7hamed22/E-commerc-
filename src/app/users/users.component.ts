import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';
import { Iposts } from '../shared classes and types/interfacePosts';
import { IUser } from '../shared classes and types/interfaceUsers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  ErrorMsg:string='';
users:IUser[]=[];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    },
    serviceError=>{
      this.ErrorMsg=serviceError;
    }
    )
  }

}
