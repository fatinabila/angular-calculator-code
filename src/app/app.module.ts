import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { calculatorComponent } from './homepage/calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { Routes , RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { HistoryService } from './history/service/history.service'

const appRoute : Routes  = [

  { path : '' , component : HomepageComponent },
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
    HistoryComponent,
    HomepageComponent
  ],

  bootstrap: [ 
    AppComponent 
  ],

  providers :[

    HistoryService
  
  ]
})
export class AppModule { }
