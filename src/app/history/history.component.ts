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

    this.isHistoryEmpty();
  
  }

  deleteHistory(id){

    for (let i=0; i< this.history.length ; i++){

      if (id== this.history[i].id){

        this.history.splice(i,1);
        break;

      }

    }

    this.isHistoryEmpty();
    
  }

  isHistoryEmpty (){
    this.history.length == 0 ?  this.empty = true :  this.empty = false;
  }

  

 

}
