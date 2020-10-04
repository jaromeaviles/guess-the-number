let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let input = document.querySelector("input");
let enterButton = document.querySelector("#enter");
let resetButton = document.querySelector("#reset");
let displayMessage = document.getElementById("displayMessage");

let answer = randomNumbers();

enterButton.addEventListener("click", function () {

if (Number(input.value) === answer) {
	displayMessage.textContent = "You've Guessed It!";
	displayMessage.classList.add("message");
	input.value = "";
	enterButton.disabled = true;
	input.classList.add("disabled");

} else if (input.value === "") {

	displayMessage.textContent = "Field is empty :(";

} else {

	displayMessage.textContent = "Error! Try Again!";
	displayMessage.classList.add("message");
	input.value = "";
}

});

resetButton.addEventListener("click", function () {
	input.value = "";
	displayMessage.textContent = "";
	displayMessage.classList.remove("message");
	enterButton.disabled = false;
	answer = randomNumbers();
});

function randomNumbers () {
	for (let i = 1; i < numbers.length; i++) {
		let random = Math.floor(Math.random() * numbers.length + 1);
		return random;
	}
}

