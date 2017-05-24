import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;

  constructor(private _router:Router) { }

    ngOnInit() {
        let currentUrl = this._router.url;
        let stro = currentUrl.replace("/", ">");
    }

}
