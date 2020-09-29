import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Post } from './post';
import { user } from './users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient,
    private activatedRoute:ActivatedRoute
  ) { }

  path:string="https://jsonplaceholder.typicode.com/";

  get_posts(userid):Observable<Post[]> {

    if(userid) {

    let newPath = this.path+"posts?userId="+userid
     return this.http.get<Post[]>(newPath)

    } else {

    return this.http.get<Post[]>(this.path+"posts")

  }
}


}
