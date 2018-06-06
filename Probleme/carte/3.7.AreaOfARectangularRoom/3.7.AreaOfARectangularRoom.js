/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var length = Number(prompt("What is the length of the room in feet?")),
       width = Number(prompt("What is the width of the room in feet?"));
   if(isNaN(length) == true || isNaN(width)) {
       alert("Please enter numbers only");
       location.reload();
   } else {
       var areaSqFeet = length * width,
           areaSqMeters = (areaSqFeet * 0.09290304).toFixed(3);
       $("#content").html("What is the length of the room in feet? " + length + "<br>" +
           "What is the width of the room in feet? " + width + "<br>" +
           "You entered dimensions of " + length + " feet by " + width +  " feet. <br>" +
           "The area is <br>" +
           areaSqFeet + " square feet <br>" +
           areaSqMeters + " square meters.");
   }
});