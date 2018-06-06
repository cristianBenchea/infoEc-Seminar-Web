/**
 * Created by Benchea on 06.06.2018.
 */
$(document).ready(function () {
    // Create a map of usernames and passwords and ensure the username and password combinations match
    var users = [];
    function user(username, password){
        this.username = username;
        this.password = password;
        users.push(this);
    }
    var alex = new user("alex", "123");
    var cristian22 = new user("cristian22", "chr22");
    var drPal = new user("dragos", "dr123");
    var usr = prompt("usr"),
        pwd = prompt("pwd");
    console.log(users);
    for(var i = 0; i < users.length; i++) {
        if (usr === users[i].username && pwd === users[i].password) {
            $("body").text("Welcome");
            break;
        } else {
            $("body").text("I don't know you.");
        }
    }
});