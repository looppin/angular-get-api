import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { user } from './users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  path:string="https://jsonplaceholder.typicode.com/";
  post:Post[];
  users:user[];

  ngOnInit(): void {
    this.get_posts();
    this.get_users();

  }

  get_posts() {
    this.http.get<Post[]>(this.path+"posts").subscribe(Response=>{
      this.post = Response;
    }) 
  }

  get_users() {
    this.http.get<user[]>(this.path+"users").subscribe(Response=>{
      this.users = Response;
    }) 
  }

}
