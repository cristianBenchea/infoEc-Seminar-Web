/**
 * Created by Benchea on 25.04.2018.
 */
$(document).ready(function () {
   $.getJSON('quotes.json', function (json) {
     $("#submit").click(function (event) {
        var quotes = json.quotes;
        var random = Math.floor(Math.random() * quotes.length);
        console.log(random);
        $("#quote").text(quotes[random].quote);
        $("#citation").text(quotes[random].citation);
     });
   });
});