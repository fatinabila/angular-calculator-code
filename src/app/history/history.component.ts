import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/service/history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public historyService:HistoryService) { 

    
  }

  history;
  empty;

  ngOnInit() {

    this.history=this.historyService.getHistory();

    this.history.length == 0 ?  this.empty = true :  this.empty = false;
  
  }

  

 

}
