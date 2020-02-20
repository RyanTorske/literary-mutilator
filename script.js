function changeColor() {
	let p = document.getElementById("header");
	header.style.backgroundColor = "yellow";
}

function changeWord() {
	let string = document.getElementById("second").innerHTML;
	let change = string.replace("Captain", "Mal");
	document.getElementById("second").innerHTML = change;
}

