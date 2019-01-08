/*alert("Hello world");
confirm("I love Jesus");
prompt("Do you love Jesus?");*/

let yourNumber = prompt("choose a number 1-10");
let randomNumber = Math.round(Math.random());
alert(randomNumber);
alert(yourNumber);

if(yourNumber == randomNumber) {
	alert("hurrayyy!!!");
} else {
	alert("try again");
}