import { Component, EventEmitter , Output} from '@angular/core';
import { HistoryService } from '../../history/service/history.service';
 
@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class calculatorComponent {

  constructor (public historyService :HistoryService ){ }

  @Output() history = new EventEmitter<any>();

  numTyped : any = 0;
  calculationProcess : any = "";
  calcString : any = []
  displayResult;
  num= [];
  firstNum;
  secondNum;
  openBracket = true;

  reset (){
  this.numTyped  = 0;
  this.calculationProcess = "";
  this.calcString= []
  this.displayResult=0;
  this.num= [];
  this.firstNum= undefined; 
  this.secondNum = undefined;
  }

  calc(number){
    this.num.push(number);
    this.numTyped=  this.num.join('');
    this.updateCalcProcess();
  }

  updateCalcProcess(){
     this.calculationProcess = this.calcString.join('');
  }

  clearTyping(){
    this.numTyped = 0;
    this.num =[];
  }

  checkOperator(operator){

    let lastElement = this.calcString[this.calcString.length - 1];

    if ( this.calcString.length > 0){

      if (typeof lastElement == 'number'){
       this.calcString.push(operator);
      }

      else {
       this.calcString.pop();
       this.calcString.push(operator);
      }

    }
 
  }

  operator(type){

    this.numTyped = parseFloat(this.numTyped);

    if (this.numTyped != 0){

      if(this.firstNum == undefined){
        this.firstNum = parseFloat(this.numTyped);
        this.calcString.push(this.firstNum);
      } 
  
      else {
        this.secondNum =parseFloat(this.numTyped);
        this.calcString.push(this.secondNum);
      }

      this.calculation();

    }

    this.checkOperator(type);
    this.updateCalcProcess();
    this.clearTyping();
 
  }

  calculation(){

    if (this.firstNum != undefined && this.secondNum != undefined){

      let lastOperatorInArray = this.calcString[this.calcString.length-2];

      /* If function is called from getResult() */
      if (typeof lastOperatorInArray == "number"){
       lastOperatorInArray = this.calcString[this.calcString.length-1];
      } 

      if(lastOperatorInArray == " + "){ 
        this.displayResult = this.firstNum + this.secondNum;
      }

      else if (lastOperatorInArray == " - "){
        this.displayResult = this.firstNum - this.secondNum;
      }

      else if(lastOperatorInArray == " ÷ "){
        this.displayResult = this.firstNum / this.secondNum;
      } 

      else if(lastOperatorInArray == " x "){
        this.displayResult = this.firstNum * this.secondNum;
      }  
       
      this.historyService.addHistory(this.firstNum+" "+lastOperatorInArray+" "+this.secondNum+" = "+this.displayResult);

      this.firstNum= this.displayResult;

     }

     else { 
       this.displayResult = this.firstNum;
     }

   
  }

  getResult (){

    /* Check if user already typed the first number */

    if (this.firstNum != undefined){

      this.secondNum =parseFloat(this.numTyped);

      /* check if user press '=' when user didnt type the second number yet */

      if (this.secondNum !=0 ) {

          this.calcString.push(this.secondNum);
          this.calculation();
          this.updateCalcProcess();
          this.clearTyping();
    
      }
   
    }
 
  }
 
}
