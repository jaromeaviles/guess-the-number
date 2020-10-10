let input = document.querySelector("input");
let enterButton = document.querySelector("#enter");
let resetButton = document.querySelector("#reset");
let displayMessage = document.querySelector("p");

let answer = Math.floor(Math.random() * 100);

enterButton.addEventListener("click", function () {

if (input.value === "") {
	displayMessage.textContent = "Field is empty :(";
} else if (Number(input.value) < answer) {
	displayMessage.textContent = "It's too low!";
} else if (Number(input.value) > answer) {
	displayMessage.textContent = "It's too high!";
} else {
	displayMessage.textContent = "You've Guessed It! and you picked number is " + answer + "!";
	enterButton.disabled = true;
	input.classList.add("disabled");
}

});

resetButton.addEventListener("click", function () {
	input.value = "";
	displayMessage.textContent = "Pick a number from 1-100";
	enterButton.disabled = false;
	answer = Math.floor(Math.random() * 100);
});
