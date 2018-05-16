/**
 * Created by Benchea on 16.05.2018.
 */
$(document).ready(function () {
    var items = [];

    $("#additem").click(function () {
        //Se recomanda Number in loc de parseInt pentru ca e mai rapid;
        var name      = $("#name").val(),
            price     = Number($("#price").val()),
            quantity  = Number($("#quantity").val());

        if(checkFields(name, price, quantity)) {
            items = addToList(items, name, price, quantity);
            printItem(name, price, quantity);

            //clear fields
        }
    });

    $("#calculate").click(function () {
        var taxIncl = $("input:radio[name=tax]:checked").val(),
            totals = [];
        totals = calcTotals(taxIncl, items, totals);

        $("#totals").html("Subtotal: $" + totals[0] + "<br/> VAT: $" + totals[1] + "<br/> Total: $" + totals[2]);
    });
});

var VAT = 0.2;

function addToList(list, name, price, quantity){
    list.push({
        name: name,
        price: price,
        quantity: quantity
    })
    return list;
}

function printItem(name, price, quantity) {
    name= "<td>" + name + "</td>";
    quantity = "<td>" + quantity + "</td>";
    price = "<td>" + price.toFixed(2) + "</td>";
    $("#items").append("<tr>" + name + quantity + price + "</tr>");
}

function calcPrice(list) {
    var num = 0;
    for(i = 0; i < list.length; i++){
        num =  num + (list[i].quantity * list[i].price);
    }
    return num;
}

function calcTotals(taxIncl, arr1, arr2) {
    var subtotal,
        taxAmount,
        total;

    if(taxIncl === "yes") {
        total = Number(calcPrice(arr1));
        subtotal = Number(total / 1.2);
        taxAmount = Number(total - subtotal);
    } else if(taxIncl === "no"){
        subtotal = Number(calcPrice(arr1));
        taxAmount = Number(VAT * subtotal);
        total = Number(subtotal + taxAmount);
    }
    arr2.push(subtotal.toFixed(2), taxAmount.toFixed(2), total.toFixed(2));
    return arr2;
}

function checkFields(name, price, quantity) {
    if(isNaN(price) === true || isNaN(quantity) === true){
        alert("Please enter a number for the price and/or quantity.");
    } else if(!name || !price || !quantity){
        alert("You forgot something.");
    } else if(price <= 0 || quantity <= 0){
        alert("Please enter a positive number for the price and/or quantity");
    } else {
        return true;
    }
}