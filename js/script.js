// ask the userName
var userName = prompt("What's your name?");
console.log(userName);
document.getElementById('user_name').innerHTML = '"' + userName + '".';

// ask the userSurname
var userSurname = prompt("What's your surname?");
console.log(userSurname);
document.getElementById('user_surname').innerHTML = '"' + userSurname + '".';

// ask the year of birth
var userYear = prompt("In which year were you born?");
userYear = parseInt(userYear);
console.log(userYear);
document.getElementById('user_year').innerHTML = '"' + userYear + '".';

// calculate the user age
var currentYear = 2019;
console.log(currentYear);
var userAge = currentYear - userYear;
console.log(userAge);
document.getElementById('user_age').innerHTML = '"' + userAge + ' years old".';

// ask favorite color
var userColor = prompt("What's your favorite color?");
console.log(userColor);
document.getElementById('user_color').innerHTML = '"' + userColor + '".';

// print super secret password
var userPassword = userName + userSurname + userYear + userAge + userColor;
console.log(userPassword);
document.getElementById('user_password').innerHTML = '"' + userPassword + '"';
