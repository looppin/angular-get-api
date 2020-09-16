import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { Post } from './post/post';


const routes :Routes=[
  {path:"posts", component:PostComponent},
  {path:"", redirectTo: "posts", pathMatch: "full"},
  {path:"posts/:userid", component:PostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
