import {Component, Inject, OnInit} from '@angular/core';
import {Routes, NavigationStart, Router} from "@angular/router";

interface DialogData {
  id:string;
  name: string;
  mail: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message:string|undefined;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.navigate(event);
      }
    })
  }
  navigate(event:any){
    this.message = event.url;
  }
  ngOnInit() {}
}
