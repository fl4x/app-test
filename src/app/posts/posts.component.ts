import { post } from './../posts';
import { PostsService } from './../services/posts.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  id: number;
  posts: post[] = [];

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) {
    this.postsService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/posts/1'], { replaceUrl: true });
  }
}
