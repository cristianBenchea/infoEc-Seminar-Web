/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
    var name = prompt("What is your name?"),
        name2 = "<p>What is your name ? " + name + "</p>",
        greeting = "<p>Hi, " + name + ", nice to meet you! </p>";

    $("#content").append(name2);
    $("#content").append(greeting);
});


