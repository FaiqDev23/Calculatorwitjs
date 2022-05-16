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
           secondNum+=true
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
   }

   $(document).on("click",".calc-button",function(){
        
    let button=$(this)
    let value=button.html()
    console.log(value);



    if(button.hasClass("calc-num")){
      console.log("Bu reqemdir")    
      addNumber(value)
    }
    else if(button.hasClass("calc-operation")){
            console.log("Bu operatordur")
            chooseOperator(value);
    }else if (button.hasClass("calc-equal")){
        console.log("Bu beraberdir")
    }else{
        console.log("Bu clear buttonudur")
    }
    
   });


})
