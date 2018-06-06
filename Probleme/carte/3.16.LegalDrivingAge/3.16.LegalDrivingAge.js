/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var age = Number(prompt("What is your age?"));
   if(isNaN(age) || age < 0 || age == ""){
       alert("Please enter a positive number");
       location.reload();
   } else {
       age >= 16 ? $("#content").text("You are old enough to legally drive") : $("#content").text("You are not old enough to legally drive.");
   }
});