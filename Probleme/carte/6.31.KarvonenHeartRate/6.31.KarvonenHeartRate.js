/**
 * Created by Benchea on 07.06.2018.
 */
$(document).ready(function () {
   var age = Number(prompt("Enter your age")),
       hRate = Number(prompt("Enter your resting heart rate"));
   /*for(var i = 55; i <= 95; i+= 5){
       var calc = (((220-age)-hRate)*(i/100)) + hRate;
       $("#tabel").append("<tr><td class='dotted'>"+i+"%</td><td>"+calc.toFixed(2)+"</td></tr>")
   }*/
   //Challenge slider
   $("#slider").on('input', function () {

       var sliderVal = $("#slider").val();
       $("#sliderLabel").text(sliderVal + "%");
       var calc = (((220-age)-hRate)*(sliderVal/100)) + hRate;
       $("#results").html("<td class='dotted'>"+sliderVal+"%</td><td>"+calc.toFixed(2)+"</td>");
   });
});