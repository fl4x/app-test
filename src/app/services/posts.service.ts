import { post } from './../posts';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http:Http) { 
    console.log('Post Service Initialized...')
  }
  
  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
      .map(res => res.json());
  }

}
