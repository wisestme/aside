/*alert("Hello world");
confirm("I love Jesus");
prompt("Do you love Jesus?");*/

let yourNumber = prompt("choose a number 1-10");
let randomNumber = Math.round(Math.random());
alert("the lucky number is " + randomNumber);
alert("your chosen number is " + yourNumber);

if(yourNumber == randomNumber) {
	alert("hurrayyy!!!");
} else {
	alert("try again");
}