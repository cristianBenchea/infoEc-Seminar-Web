$(document).ready(function () {
    var dt = new Date();
    var thisYear = dt.getFullYear();

    $("#submit").click(function () {
        var current = Number($("#current").val());
        var retirement = Number($("#retirement").val());

        if (isNaN(current) === true || isNaN(retirement) === true || current == "" || retirement == "") {
            alert("Please enter a number");
        } else if (current < 0 || retirement < 0) {
            alert("Please enter a positive number");
        } else {
            var yearsLeft = retirement - current;
            var retireYear = thisYear + yearsLeft;
            if (yearsLeft <= 0) {
                $("#results").text("You can retire now.");
            } else {
                $("#results").html("You have " + yearsLeft + " years left until you can retire. <br>" +
                    "It's " + thisYear + ", so you can retire in " + retireYear + ".");
            }
        }
    });
});