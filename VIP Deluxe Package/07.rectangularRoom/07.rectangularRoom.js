/**
 * Created by Benchea on 02.05.2018.
 */
$(document).ready(function () {
    $("#submit").click(function(){
        var l = Number($("#length").val());
        var w = Number($("#width").val());

        if(checkFields(l,w) === true){
            var sqFeet = calcArea(l, w);
            var sqMet = convertToMeters(sqFeet);
            $("#results").html("You entered dimensions of " + l + " feet by " + w + " feet. <br>" +
            "Your room's area is " + sqFeet + " square feet, or " + sqMet + " square meters.");
        }
    });

    const CONVERSION = 0.09290304;
    function convertToMeters(sqFeet){
        var num = sqFeet * CONVERSION;
        return num.toFixed(3);
    }
    function calcArea(l,w){
        return l*w;
    }
    function checkFields(l,w) {
        if(isNaN(l) === true || isNaN(w) === true){
            alert("Please enter a number.");
        } else if(!l || !w){
            alert("You didn't input anything.");
        } else if(l < 0 || w < 0){
            alert("Please enter a positive number");
        } else {
            return true;
        }
    }
});