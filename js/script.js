// ask the userName
var userName = prompt("What's your name?");
console.log(userName);
document.getElementById('user_name').innerHTML = userName;

// ask the userSurname
var userSurname = prompt("What's your surname?");
console.log(userSurname);
document.getElementById('user_surname').innerHTML = userSurname;

// ask the year of birth
var userYear = prompt("In which year were you born?");
console.log(userYear);
document.getElementById('user_year').innerHTML = userYear;

// ask favorite color
var userColor = prompt("What's your favorite color?");
console.log(userColor);
document.getElementById('user_color').innerHTML = userColor;

// print super secret password
var userPassword = userName + userSurname + userYear + userColor;
console.log(userPassword);
document.getElementById('user_password').innerHTML = userPassword;
