/**
 * Created by Benchea on 07.06.2018.
 */
$(document).ready(function () {
    var arr = [];
    var name = prompt("Enter a name");
    arr.push(name);
    while(name !== ""){
        name = prompt("Enter a name");
        arr.push(name);
        $("body").append("Enter a name: " + name);
    }
    if(arr.length > 1){
        var random = Math.floor((Math.random() * arr.length) - 1);
        $("body").html("The winner is..." + arr[random]);
    } else {
        $("body").html("There is no winner");
    }

});