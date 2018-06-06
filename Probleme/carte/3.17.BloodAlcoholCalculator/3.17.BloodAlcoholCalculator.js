/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var gender = prompt("Enter your gender (F/M)").toUpperCase(),
       weigth = Number(prompt("Enter your weight")),
       drinks = Number(prompt("Enter the number of drinks")),
       alcohol = Number(prompt("Enter the amount of alcohol by volume of the drinks consumed")),
       lastDrink = Number(prompt("Enter the number of hours since your last drink"));
   var ratio;
   if(gender === "F" || gender === "FEMALE"){
       ratio = 0.66;
   } else if(gender === "M" || gender === "MALE") {
       ratio = 0.73;
   }
   var bac1 = (drinks*alcohol) * 5.14;
   var bac2 = weigth * ratio;
   var bac = (bac1/bac2) - 0.015 * lastDrink;
   var legalToDrive;
   if(bac > 0.08){
       legalToDrive = "It is not legal for you to drive.";
   } else {
       legalToDrive = "It's legal for you to drive";
   }
   $("#content").html("Your BAC is " + bac.toFixed(2) + "<br>" + legalToDrive);
});