import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { user } from './users';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { SelectControlValueAccessor } from '@angular/forms';
import {AlertifyService} from '../services/alertify.service';
import {PostService} from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [AlertifyService, PostService]
})

export class PostComponent implements OnInit {

  constructor(
    private http:HttpClient, 
    private activatedRoute:ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService:PostService
    ) { }

  path:string="https://jsonplaceholder.typicode.com/";
  post:Post[];
  users:user[];
  filterText:string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.get_posts(params["userid"])
    } );
    this.get_users();

  }

  get_posts(userid) {

    this.postService.get_posts(userid).subscribe(data =>{
      this.post = data
    })

}

  get_users() {
    this.http.get<user[]>(this.path+"users").subscribe(Response=>{
      this.users = Response;
    }) 
  }

  addToFav(post) {
    this.alertifyService.success("Başarılı")
  }

}
