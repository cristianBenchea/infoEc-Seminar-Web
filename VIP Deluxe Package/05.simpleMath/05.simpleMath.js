$(document).ready(function () {
    $("#submit").click(function () {
        var firstNumber = Number($("#first").val());
        var secondNumber = Number($("#second").val());
        var sum = firstNumber + secondNumber;
        var diff = firstNumber - secondNumber;
        var prod = firstNumber * secondNumber;
        var quot = firstNumber / secondNumber;
        if(isNaN(firstNumber) || isNaN(secondNumber)) {
            alert("You didn't type a number!");
        } else if (first < 0 || second < 0) {
            alert("Please enter a positive number");
        } else {
            $("#results").html(firstNumber + " + " + secondNumber + " = " + sum + "<br/>" +
                firstNumber + " - " + secondNumber + " = " + diff + "<br/>" +
                firstNumber + " * " + secondNumber + " = " + prod + "<br/>" +
                firstNumber + " / " + secondNumber + " = " + quot);
        }
    });
});