var elm = (function () {
	var id = function(x) {
		return document.getElementById(x);
	};
	var name = function(x) {
		return document.getElementsByName(x);
	};
	var create = function(x) {
		return document.createElement(x);
	};
	return {
        ID: id,
        id: id,
        NAME: name,
        name: name,
	create: create,
	new: create
	}
})();
