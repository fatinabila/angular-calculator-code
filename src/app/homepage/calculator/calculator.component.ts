import { Component, EventEmitter , Output} from '@angular/core';
import { HistoryService } from '../../history/service/history.service';
 
@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class calculatorComponent {

  constructor (public historyService :HistoryService ){ }
  
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

  /**** Get number typed by the user ****/

  calc(number){
    this.num.push(number);
    this.numTyped=  this.num.join('');
  }

  /**** Show calculation process  ****/

  updateCalcProcess(){
     this.calculationProcess = this.calcString.join('');
  }

  /*** Reset the number typed ****/

  clearTyping(){
    this.numTyped = 0;
    this.num =[];
  }

  /** Check if the last element in the calcString is also an operator. If yes, replace the operator  ****/

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

  /*** Update calculation as new operator is entered ****/

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

  /**** calculation() : Called either from funtion operator() or getResult()  ****/

  calculation(){

    if (this.firstNum != undefined && this.secondNum != undefined){

      let lastOperatorInArray;

      /**** Check if function called from getResult()  ****/
      typeof lastOperatorInArray == "number" ?  lastOperatorInArray = this.calcString[this.calcString.length-1] :  lastOperatorInArray = this.calcString[this.calcString.length-2];

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
      
      this.firstNum= this.displayResult;

     }

     else { 
       this.displayResult = this.firstNum;
     }
   
  }

  /**** getResult() : considering if user enter '=' when first and second number is not entered yet ****/

  getResult (){

    if (this.firstNum != undefined){

      this.secondNum =parseFloat(this.numTyped);

      if (this.secondNum !=0 ) {

          this.calcString.push(this.secondNum);
          this.calculation();
          this.updateCalcProcess();
          this.historyService.addHistory(""+this.calculationProcess+" = "+this.displayResult );
          this.clearTyping();
          this.firstNum= undefined; 
          this.secondNum = undefined;
          this.calcString= [];

      }
   
    }
 
  }
 
}
