/**
 * Created by Benchea on 25.04.2018.
 */
$(document).ready(function () {
   $("#submit").click(function () {
       var name = $('#name').val();
       var greeting = 'Hello, ' + name + ', nice to meet you.';
       $('#greetings').text(greeting);
   });
});