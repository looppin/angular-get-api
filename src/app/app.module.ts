import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { Post } from './post/post';
import { AlertifyService } from './services/alertify.service';
import { PostFilterPipe } from './post/post-filter.pipe';


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
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
