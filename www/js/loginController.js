angular.module('LeukemiaApp').controller('loginCtrl', ['$scope','$location', function($scope, $location) {
	

	document.addEventListener("deviceready", function() {
		var a = window.plugins;
	});
$scope.onLoginClick = function() {
	$location.url("/dashboard");
}
	
}]);