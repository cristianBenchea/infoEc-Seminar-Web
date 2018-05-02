var input_string;
function countChars() {
    input_string = document.getElementById('count').value;
    input_string = input_string.trim();
    result =  input_string.length;
    console.log(input_string + " has " + input_string.length + " characters.");
    document.getElementById('result').innerHTML = input_string + " has " +result + " charcaters.";
    document.getElementById('counter').value = result;
}

function IsEmpty() {
    if(document.getElementById('count').value = "") {
        document.getElementById('result').innerHTML = "Please enter something.";
    }
    return;
}

function startTimer() {
    setTimeout('countChars()', 1000);
    // setInterval('countChars()', 1000);
}