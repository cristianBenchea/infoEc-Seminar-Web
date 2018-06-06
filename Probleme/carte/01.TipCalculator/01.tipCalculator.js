/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
    $("#tipPercentage").on('change', function () {
        var tipRate = $("#tipPercentage").val();
        $("#tipSlider").text(tipRate + "%");
        calculate();
    });
    $("#billAmount").on('input', function () {
       calculate();
    });
    $("#calculate").click(function () {
        calculate();
    });
});

function calculate() {
    var bill = Number($("#billAmount").val()),
        tipRate = Number($("#tipPercentage").val() / 100),
        tip = 0,
        total = 0;
    tip = bill * tipRate;
    total = bill + tip;
    $("#result").html("Tip: $" + tip + "<br> Total: $" + total);
}