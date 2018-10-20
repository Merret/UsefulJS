function align(id, mode="a", position="relative") {
	var elm = document.getElementById(id);
	elm.style.position = position;
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

function alignH(id, position="relative") {
	var elm = document.getElementById(id);
	elm.style.position = position;
	elm.style.left = (window.innerWidth - elm.width) / 2 + "px";
}

function alignV(id, position="relative") {
	var elm = document.getElementById(id);
	elm.style.position = position;
	elm.style.top = (window.innerHeight - elm.height) / 2 + "px";
}

function alignA(id, position="relative") {
	var elm = document.getElementById(id);
	elm.style.position = position;
	elm.style.left = (window.innerWidth - elm.width) / 2 + "px";
	elm.style.top = (window.innerHeight - elm.height) / 2 + "px";
}
