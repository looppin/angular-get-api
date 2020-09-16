import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  path:string="https://jsonplaceholder.typicode.com/posts";
  post:Post[];

  ngOnInit(): void {
    this.http.get<Post[]>(this.path).subscribe(Response=>{
      this.post = Response;
    }) 
  }

}
