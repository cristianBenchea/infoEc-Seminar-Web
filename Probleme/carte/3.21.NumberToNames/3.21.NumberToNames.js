/**
 * Created by Benchea on 07.06.2018.
 */
$(document).ready(function () {
   var months = {
       1: "January",
       2: "February",
       3: "March",
       4: "April",
       5: "May",
       6: "June",
       7: "July",
       8: "August",
       9: "September",
       10: "October",
       11: "November",
       12: "December"
   };
   var number = Number(prompt("Enter number"));
   $("#content").html("Number entered: " + number + "<br>" +
       "The name of the month is " +  months[number]);
});