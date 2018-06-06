/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
    var length = Number(prompt("Insert the length")),
        width = Number(prompt("Insert the width")),
        sqFeet = length * width,
        gallons = 350 / sqFeet;
    $("#content").html("You will need to purchase " + gallons + " gallons of paint to ")
});