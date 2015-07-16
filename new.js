function modelKeys(ngScope) {
	var keys = [];
	for (var key in ngScope) {
		if (ngScope.hasOwnProperty(key) && !/^\$/.test(key) && key !== 'this') {
			keys.push(key);
		}
	}
	return keys;
}

function truncate(str) {
	str = ""+str;
	if (str.indexOf("\n") >= 0) {
		return "…";
	} else {
		return str;
	}
}

setTimeout(function() {
	var scopeNodes = document.querySelectorAll(".ng-scope");
	for (var i = 0; i < scopeNodes.length; i++) {
		var node = scopeNodes[i];
		var $node = angular.element(node);
		var $scope = $node.data("$scope");
		var keys = modelKeys($scope);

		for (var f = 0; f < keys.length; f++) {
			var p = document.createElement("p");
			p.className = "modelkey";
			p.innerText = keys[f] + ": " + truncate($scope[keys[f]]);
			node.appendChild(p);
		}

	}
});
