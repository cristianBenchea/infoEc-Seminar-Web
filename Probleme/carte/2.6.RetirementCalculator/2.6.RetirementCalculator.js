/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var currAge = Number(prompt("What is your current age?")),
       retireAge = Number(prompt("At what age would you like to retire?")),
       currentYear = new Date().getFullYear(),
       yearsLeft = retireAge - currAge,
       retireYear = currentYear + yearsLeft;
   if(yearsLeft == 0){
       $("#content").html("What is your current age? " + currAge + "<br>" +
           "At what age would you like to retire? " + retireAge + "<br>" +
           "You have " + yearsLeft + " years left, you can retire.")
   }
   if(yearsLeft > 0){
       $("#content").html("What is your current age? " + currAge + "<br>" +
           "At what age would you like to retire? " + retireAge + "<br>" +
           "You have " + yearsLeft + " years left until you can retire. <br>" +
           "It's " + currentYear + ", so you can retire in " + retireYear);
   }

});