/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
    var people = Number(prompt("How many people?")),
        pizzas = Number(prompt("How many pizzas do you have?")),
        slices = Number(prompt("How many slices are in a pizza?"));
    if(isNaN(people) == true || isNaN(pizzas) || isNaN(slices)) {
        alert("Please enter numbers only");
        location.reload();
    } else {
        var totalPieces = slices * pizzas;
        var pieceForEach = Math.floor(totalPieces / people);
        var leftovers = totalPieces - (pieceForEach * people);
        $("#content").html("How many people? " + people + "<br>" +
            "How many pizzas do you have? " + pizzas + "<br>" +
            "How many slices are in a pizza? " + slices + "<br>" +
            people + " people with " + pizzas + " pizzas <br>");
        if(pieceForEach > 1) {
            $("#pieces").html("Each person gets " + pieceForEach + " pieces of pizza.");
        } else {
            $("#pieces").text("Each person gets " + pieceForEach + " piece of pizza.");
        }
        if (leftovers <= 0 || leftovers > 1){
            $("#leftovers").text("There are " + leftovers + " leftover pieces");
        } else if(leftovers > 0 && leftovers <= 1) {
            $("#leftovers").text("There is " + leftovers + " leftover piece");
        }
    }
});