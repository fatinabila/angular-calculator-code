import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  historyTemp : any = [];
  history : any = [];

  addHistory (data){

    this.historyTemp.push(data);

    let id = this.historyTemp.length;

    this.history.push({
      id :id,  history: data
    });

  }


  getHistory(){

    return this.history;  

  }

}
