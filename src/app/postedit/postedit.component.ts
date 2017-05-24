import { PostsService } from './../services/posts.service';
import { post } from './../posts';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'app-postedit',
  templateUrl: './postedit.component.html',
  styleUrls: ['./postedit.component.css']
})
export class PosteditComponent implements OnInit {
  @Input() post: post;

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder, private postsService: PostsService, private router: Router ) { }

  ngOnInit(): void {
    
    this.myForm = this._fb.group({
            userId: ['', [Validators.required]],
            id: ['', [Validators.required]],
            title: ['',[Validators.required]],
            body: ['',[Validators.required]]
            })
  }

  save(model: post, isValid: boolean) {
    this.submitted = true;
    
    console.log(model, isValid);
  }

  onCli() {
    this.router.navigate(['/posts'], { replaceUrl: true });
  }
  
}
