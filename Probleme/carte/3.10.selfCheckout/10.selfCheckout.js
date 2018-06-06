/**
 * Created by Benchea on 16.05.2018.
 */

$(document).ready(function () {
    var priceItem1 = Number(prompt("Enter the price of item 1")),
        quantityItem1 = Number(prompt("Enter the quantity of item 1")),
        priceItem2 = Number(prompt("Enter the price of item 2")),
        quantityItem2 = Number(prompt("Enter the quantity of item 2")),
        priceItem3 = Number(prompt("Enter the price of item 3")),
        quantityItem3 = Number(prompt("Enter the quantity of item 3"));

    if(checkFields(priceItem1, quantityItem1, priceItem2, quantityItem2,priceItem3,quantityItem3)) {
        calculate(priceItem1, quantityItem1, priceItem2, quantityItem2,priceItem3,quantityItem3);
    }
});
const TAX = 0.055;
function checkFields(price1,quantity1,price2,quantity2,price3,quantity3) {
    if(isNaN(price1) || isNaN(quantity1) || isNaN(price2) || isNaN(quantity2) || isNaN(price3) || isNaN(quantity3)) {
        alert("Please enter numbers only");
        location.reload();
        return false;
    } else if(price1 < 0 || quantity1 < 0 || price2 < 0 || quantity2 < 0 || price3 < 0 || quantity3 <0) {
        alert("Please enter positive numbers");
        location.reload();
        return false;
    }
    return true;
}

function calculate(price1,quantity1,price2,quantity2,price3,quantity3) {
    var totalWithoutTax = price1 * quantity1 + price2 * quantity2 + price3 * quantity3;
    var tax = totalWithoutTax * TAX;
    var total = tax + totalWithoutTax;
    $("#content").html("Enter the price of item 1: " + price1 + "<br>" +
        "Enter the quantity of item 1: " + quantity1 + "<br>" +
        "Enter the price of item 2: " + price2 + "<br>" +
        "Enter the quantity of item 2: " + quantity2 + "<br>" +
        "Enter the price of item 3: " + price3 + "<br>" +
        "Enter the quantity of item 3: " + quantity3 + "<br>" +
        "Subtotal: $" + totalWithoutTax + "<br>" +
        "Tax: " + tax + "<br>" +
        "Total: " + total);
}