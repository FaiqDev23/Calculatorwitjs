$(document).ready(function(){

    // Dom elements
    let resultContent=$(".header-result");
    let firstNumContent=$(".num-first");
    let secondNumContent=$(".num-second");
    let operationContent=$(".operation");

   //variables
   let firstNum="";
   let secondNum="";
   let operation="";
   let result="";
   let nextStep=false;


   function addNumber(num){
       if(nextStep){
           secondNum+=num
           console.log("ikinci reqem",secondNum);
           secondNumContent.fadeIn();
           secondNumContent.html(secondNum)
       }
       else{
           firstNum+=num;
           firstNumContent.fadeIn();
           console.log("birinci reqem",firstNum);
           firstNumContent.html(firstNum);
       }
   }

   function chooseOperator(opr){
       operation=opr;
       nextStep=true;
       console.log(operation);
       operationContent.fadeIn();
       operationContent.html(operation);
   }

   function resultEqual(){
       switch(operation){
           case"+":
           result = parseInt(firstNum) + +secondNum;
           break;
           case"-":
           result = +firstNum - +secondNum;
           break;
           case"*":
           result = +firstNum * +secondNum;
           break;
           default:
               result= +firstNum / +secondNum;
                
       }
               resultContent.fadeIn();
               resultContent.html(result.toFixed(2));
    }

    function clearCalc(){
        firstNum="";
        secondNum="";
        operation="";
        result="";
        nextStep=false;

        operationContent.fadeOut();
        firstNumContent.fadeOut();
        secondNumContent.fadeOut();
        resultContent.fadeOut();
    }
   $(document).on("click",".calc-button",function(){
        
    let button=$(this)
    let value=button.html()
    console.log(value);



    if(button.hasClass("calc-num")){
      addNumber(value)
    }
    else if(button.hasClass("calc-operation")){
            chooseOperator(value);
    }else if (button.hasClass("calc-equal")){
            resultEqual()
    }else{
          clearCalc()
    }
    
   });


})
