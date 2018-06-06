/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var quote = prompt("What is the quote?"),
       author = prompt("Who said it?");
    $("#content").append(author + " says, \"" + quote + ".\"");
});