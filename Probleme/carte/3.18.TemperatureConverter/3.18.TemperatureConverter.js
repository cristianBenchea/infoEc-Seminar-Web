/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var unit = prompt("Convert to (C/F)").toUpperCase();
   if(unit === "C" || unit === "CELSIUS") {
       var temperature = Number(prompt("Enter temperature in Fahrenheit"));
       var convertC = (temperature - 32) * (5/9);
       $("#content").html("The temperature in Fahrenheit: " + temperature + "<br>" +
           "The temperature in Celsius is " + convertC.toFixed(2));
   } else if(unit === "F" || unit === "FAHRENHEIT") {
       var temperature = Number(prompt("Enter temperature in Celsius"));
       var convertF = (temperature * (9/5)) + 32;
       $("#content").html("The temperature in Celsius: " + temperature + "<br>" +
           "The temperature in Fahrenheit is " + convertF.toFixed(2));
   } else {
       alert("Please enter C/Celsius OR F/Fahrenheit");
       location.reload();
   }

});