import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/service/history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public historyService:HistoryService) { }

  history;
  empty;

  ngOnInit() {

    this.history=this.historyService.getHistory();

    this.history.length == 0 ?  this.empty = true :  this.empty = false;
  
  }

  deleteHistory(id){
    console.log(id)

    this.history;

    for (let i=0; i< this.history.length ; i++){

      if (id== this.history[i].id){

        this.history.splice(i,1);
        break;

      }

    }
  }

  

 

}
