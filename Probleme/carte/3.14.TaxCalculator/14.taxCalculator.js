/**
 * Created by Benchea on 16.05.2018.
 */
$(document).ready(function () {
   $("#calculate").click(function () {
      var amount = Number($("#amount").val()),
          state = $("#state").val().toUpperCase(),
          outputTotal = "The total is $" + amount + ".";

      if(state === "WI" || state === "WISCONSIN"){
          outputTotal = calcTax(amount);
      }

      $("#results").html(outputTotal);
   });
});

const TAX = 0.055;

function calcTax(amount) {
    var toAdd = Number((amount * TAX).toFixed(2)),
        total = Number((amount+toAdd).toFixed(2)),
        str = "The subtotal is $" + amount +
            ". <br /> The tax is $" + toAdd +
            "<br /> The total is $" + total + ".";
    return str;
}