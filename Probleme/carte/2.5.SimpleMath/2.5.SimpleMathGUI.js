/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {

    $("#num1, #num2").on('input', function () {
        if(verification() == true){
            calculate();
        }
    });
});
function verification() {
    var num1 = Number($("#num1").val()),
        num2 = Number($("#num2").val());
    if(num1 < 0 || num2 < 0) {
        alert("Please enter a positive number!");
        $("#output").text("Please enter positive numbers!");
        return false;
    }
    return true;
}
function calculate() {
    var num1 = Number($("#num1").val()),
        num2 = Number($("#num2").val());

    var sum  = num1 + num2,
        sub  = num1 - num2,
        prod = num1 * num2,
        div  = num1 / num2;
    $("#output").html("What is the first number? " + num1 + "<br>" +
        "What is the second number? " + num2 + "<br>" +
        num1 + " + " + num2 + " = " + sum + "<br>" +
        num1 + " - " + num2 + " = " + sub + "<br>" +
        num1 + " * " + num2 + " = " + prod + "<br>" +
        num1 + " / " + num2 + " = " + div);
}