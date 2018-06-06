/**
 * Created by Benchea on 07.06.2018.
 */
$(document).ready(function () {
   var string1 = prompt("Enter the first string"),
       string2 = prompt("Enter the second string");
   isAnagram(string1, string2);
});


function isAnagram(string1, string2) {
    var splitted1 = string1.trim().split('').sort().join();
    var splitted2 = string2.trim().split('').sort().join();
    if(splitted1 === splitted2){
        $("#content").html("\""+string1+"\"" + " and " + "\""+string2+"\"" + " are anagrams.");
    } else {
        $("#content").html("\""+string1+"\"" + " and " + "\""+string2+"\"" + " are not anagrams.");
    }
}