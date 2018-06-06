/**
 * Created by Benchea on 07.06.2018.
 */
var errors = document.getElementById('errors');
function validateLength(firstName, lastName) {
    if(firstName.length < 2 || lastName.length < 2){
        errors.innerHTML += "The first and last name must have at least 2 characters";
        return false;
    } return true;
}
function isChar(char){
    return "abcdefghijklmnopqrstuvxyz".indexOf(char.toLowerCase()) >= 0;
}
function isDigit(char){
    return "0123456789".indexOf(char) >= 0;
}
function validateID(id){
    if(isChar(id[0]) && isChar(id[1]) && id[2]==="-" && isDigit(id[3]) && isDigit(id[4]) && isDigit(id[5]) && isDigit(id[6])) {
        return true;
    } else {
        errors.innerHTML += "The employee ID must have the following format: AA-1234";
        return false;
    }
}
function validateZIP(zip){
    console.log(zip);
    var splitted = zip.split("");
    for(var i = 0; i < splitted.length; i++){
        if(!isDigit(splitted[i])){
            errors.innerHTML += "The ZIP code must contain only numbers";
            return false;
            break;
        }
    }
    return true;
}

function myFunction(){
    errors.innerHTML = "";
    var firstName = document.getElementById("fName").value,
        lastName = document.getElementById("lName").value,
        employeeID = document.getElementById("employeeID").value,
        zipCode = document.getElementById("zipCode").value;
    if(validateLength(firstName, lastName) && validateID(employeeID) && validateZIP(zipCode)) {
        errors.innerHTML += "Enter the first name: " + firstName + "<br>";
        errors.innerHTML += "Enter the last name: " + lastName + "<br>";
        errors.innerHTML += "Enter an employee ID: " + employeeID.toUpperCase() + "<br>";
        errors.innerHTML += "Enter the ZIP code: " + zipCode + "<br>";
        errors.innerHTML += "There were no errors found.";
    }
}