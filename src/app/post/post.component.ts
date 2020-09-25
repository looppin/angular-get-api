import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { user } from './users';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
declare let alertify :any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) { }

  path:string="https://jsonplaceholder.typicode.com/";
  post:Post[];
  users:user[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.get_posts(params["userid"])
    } );
    this.get_users();

  }

  get_posts(userid) {

    if(userid) {

      this.http.get<Post[]>(this.path+"posts?userId="+userid).subscribe(Response=>{
        this.post = Response;
      }) 

    } else {
    this.http.get<Post[]>(this.path+"posts").subscribe(Response=>{
      this.post = Response;
    }) 
  }
}

  get_users() {
    this.http.get<user[]>(this.path+"users").subscribe(Response=>{
      this.users = Response;
    }) 
  }

  addToFav(post) {
    alertify.success('Ok');
  }

}
