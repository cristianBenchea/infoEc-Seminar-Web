/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
    var length = Number(prompt("Insert the length")),
        width = Number(prompt("Insert the width"));
    if(isNaN(length) || isNaN(width)){
        alert("Please enter numbers only");
        location.reload();
    } else if (length < 0 || width < 0) {
        alert("Please enter positive numbers");
        location.reload();
    } else {
        var sqFeet = length * width,
            gallons = Math.ceil(sqFeet / 350);
        $("#content").html("You will need to purchase " + gallons + " gallons of paint to cover " + sqFeet + " square feet.");
    }

});