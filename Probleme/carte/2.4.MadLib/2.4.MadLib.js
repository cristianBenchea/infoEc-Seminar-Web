/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
   var noun         = prompt("Enter a noun"),
       verb         = prompt("Enter a verb"),
       adjective    = prompt("Enter an adjective"),
       adverb       = prompt("Enter an adverb");
   $("#content").append("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? That's hilarious!");
});