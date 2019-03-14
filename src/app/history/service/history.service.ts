import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  history : any = []

  addHistory (data){

    this.history.push(data);

  

  }

  getHistory(){

    return this.history;  
  

  }

}
