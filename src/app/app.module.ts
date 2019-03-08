import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { calculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { Routes , RouterModule} from '@angular/router'

const appRoute : Routes  = [

  { path : '' , component : calculatorComponent},
  { path : 'history' , component : HistoryComponent}

]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ,
    RouterModule.forRoot(appRoute)
  ],

  declarations: [ 
    AppComponent,
    HelloComponent,
    calculatorComponent,
    HistoryComponent
  ],

  bootstrap: [ 
    AppComponent 
  ],

  providers :[
  //  {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppModule { }
