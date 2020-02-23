function changeColor() {
	let p = document.getElementById("header");
	header.style.backgroundColor = "yellow";
}

function changeWord() {
	let string = document.getElementById("second").innerHTML;
	let change = string.replace("Captain", "Mal");
	document.getElementById("second").innerHTML = change;
}

// function changeWord() {
// 	let string = document.getElementById("second").innerHTML;
// 	let change = string.replace("The Operative: You are fooling yourself, Captain. Nothing here is what it seems. You are\n" +
// 		"\tnot the plucky hero, the Alliance is not an evil empire, and this is not the grand arena.  Inara Serra:\n" +
// 		"\tAnd that's not incense.", "I have no clue what they are talking about.");
// 	document.getElementById("second").innerHTML = change;
// }

function wordColor() {
	let p = document.getElementById("noice");
	let span;
	span.style.backgroundColor = "orange";
}