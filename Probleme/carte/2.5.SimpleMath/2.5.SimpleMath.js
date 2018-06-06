/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var num1 = Number(prompt("What is the first number?")),
       num2 = Number(prompt("What is the second number?"));
   if(isNaN(num1) == true || isNaN(num2) == true){
       alert("Please enter numbers only");
       location.reload();
   } else if(num1 < 0 || num2 < 0){
       alert("Please enter positive numbers");
       location.reload();
   } else {
       var sum  = num1 + num2,
           sub  = num1 - num2,
           prod = num1 * num2,
           div  = num1 / num2;
       $("#content").html("What is the first number? " + num1 + "<br>" +
           "What is the second number? " + num2 + "<br>" +
           num1 + " + " + num2 + " = " + sum + "<br>" +
           num1 + " - " + num2 + " = " + sub + "<br>" +
           num1 + " * " + num2 + " = " + prod + "<br>" +
           num1 + " / " + num2 + " = " + div);
   }

});