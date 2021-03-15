import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Iposts } from '../shared classes and types/interfacePosts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  img3:string="../../assets/img/img1.png"
style_m="text-bg"
style_2="text-dg"
style_obj={
  color:"green",
  fontStyle:"italic"
}
categoryList = [
  {
    ID: 1,
    categoryName: "Category1"
  },
  {
    ID: 2,
    categoryName: "Category2"
  },
  {
    ID: 2,
    categoryName: "Category3"
  },
  {
    ID: 2,
    categoryName: "Category4"
  }


];
storeName="ProductsStore"



  constructor(private postsServic:PostsService) { 
  }
 
  ngOnInit(): void {
    
  
  }
 


}
