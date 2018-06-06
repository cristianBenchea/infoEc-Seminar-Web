/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {

   $("#text").on("change", function () {
       var textbox = $("#text").val();
       $("#output").html("<p>What is the input string? " + textbox +
           "<br>" + textbox + " has " + textbox.length + " characters.");
       console.log(textbox);
   });
});