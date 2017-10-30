
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

// import { BookService } from './book.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService  }  from './in-memory-data-service';

import { AppComponent } from './app.component';
// import { PageNotFoundComponent } from "./page-not-found.component";

// import {routing} from './app.routes';
// import { ObservableComponent } from './observable/observable.component';
// import { PromiseComponent } from './promise/promise.component';
import { MenuComponent } from './menu/menu.component';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

  ], //import SubcomponentComponent , ObservableComponent,   PromiseComponent,   PageNotFoundComponent,
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,BrowserAnimationsModule
    // routing,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    
  ],
  // providers: [BookService],
  bootstrap: [AppComponent] //includue SubcomponentComponent 
})
export class AppModule { }
