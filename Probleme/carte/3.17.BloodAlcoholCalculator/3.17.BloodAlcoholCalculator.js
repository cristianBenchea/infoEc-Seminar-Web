/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var gender = prompt("Enter your gender (F/M)").toUpperCase(),
       weigth = Number(prompt("Enter your weight")),
       drinks = Number(prompt("Enter the number of drinks")),
       alcohol = Number(prompt("Enter the amount of alcohol by volume of the drinks consumed")),
       lastDrink = Number(prompt("Enter the amount of time since your last drink"));
   var ratio;
   if(gender === "F" || gender === "FEMALE"){
       ratio = 0.66;
   } else if(gender === "M" || gender === "MALE") {
       ratio = 0.73;
   }
   var bac = (( (drinks*alcohol) * 5.14 ) / )
});