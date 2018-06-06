/**
 * Created by Benchea on 07.06.2018.
 */
$(document).ready(function () {
   var num1 = Number(prompt("Enter the first number")),
       num2 = Number(prompt("Enter the second number")),
       num3 = Number(prompt("Enter the third number")),
       max;
   if(num1 !== num2 || num1 !== num3 || num2 !== num3){
       max = num1;
       if(num2 > num1 && num2 > num3) {
           max = num2;
       }
       if(num3 > num2 && num3 > num1){
           max = num3;
       }
   }
   $("#content").html("The maximum number is: " + max);
});