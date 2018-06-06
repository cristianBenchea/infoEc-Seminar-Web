/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var text = prompt("What is the input string?");

   if(text == '') {
       alert("Please enter something!");
       location.reload();
   } else {
       $("#content").append("<p>What is the input string? " + text +
           "<br>" + text + " has " + text.length + " characters.");
   }
});