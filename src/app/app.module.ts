import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { calculatorComponent } from './calculator/calculator.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ,
  ],

  declarations: [ 
    AppComponent,
    HelloComponent,
    calculatorComponent
  ],

  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
