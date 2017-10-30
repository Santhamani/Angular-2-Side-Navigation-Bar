// import { BookService } from './book.service';
import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';
// import {Book} from './book';
// import { BOOKS} from './mock-book';
import { Http } from "@angular/http";
import 'rxjs/add/operator/switchMap';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'app works!';

  menuState:string = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
// export class AppComponent {
//   title:string = 'Book Store';// delete the string interpollation
//    //private speakers = [];

//   //HTTP Get() from a server
//   //  constructor(http: Http) {
//   //     http.get('http://jsonplaceholder.typicode.com/users/')
//   //         .switchMap((data) => data.json())
//   //         .subscribe((data) => {
//   //           this.speakers.push(data);
  
//   //         });
//   //   }
  
// }
