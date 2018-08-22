function align(id, mode) {
	var elm = document.getElementById(id);
	ele.style.position = "relative";
	if (mode = "h") {
		elm.style.left = (window.innerWidth - elm.width) / 2 + "px";
	}
	if (mode = "v") {
		elm.style.top = (window.innerHeight - elm.height) / 2 + "px";
	}
	if (mode = "a") {
		elm.style.left = (window.innerWidth - elm.width) / 2 + "px";
		elm.style.top = (window.innerHeight - elm.height) / 2 + "px";
	}
}

function alignH(id) {
	var elm = document.getElementById(id);
	ele.style.position = "relative";
	elm.style.left = (window.innerWidth - elm.width) / 2 + "px";
}

function alignV(id) {
	var elm = document.getElementById(id);
	ele.style.position = "relative";
	elm.style.top = (window.innerHeight - elm.height) / 2 + "px";
}

function alignA(id) {
	var elm = document.getElementById(id);
	ele.style.position = "relative";
	elm.style.left = (window.innerWidth - elm.width) / 2 + "px";
	elm.style.top = (window.innerHeight - elm.height) / 2 + "px";
}
