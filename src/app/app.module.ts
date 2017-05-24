import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdCardModule,
         MdMenuModule,
         MdToolbarModule,
         MdIconModule,
         MdCoreModule,
         MdSidenavContainer,
         MdSidenavModule,
         MdSidenav,
         MdListModule,
         MdGridListModule,
         MdInputModule,
         MdSnackBarModule } from '@angular/material';
import 'hammerjs';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { RouterModule, Routes } from '@angular/router';
import { PosteditComponent } from './postedit/postedit.component';

const appRoutes: Routes =
  [
    {
      path: 'posts', component: PostsComponent
    },
    {
      path: 'posts/:id', component: PosteditComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PosteditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCoreModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdInputModule,
    ReactiveFormsModule,
    MdSnackBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MdSidenavContainer, MdSidenav, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
