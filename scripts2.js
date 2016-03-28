var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){

	// $scope.first = "Tristan";
	// $scope.last = "Lobaugh";

	$scope.dcClass = [
		"Tristan",
		"Josh",
		"Bogdan",
		"Lazlo",
		"Kieth",
		"Will",
		"Curtis",
		"Joe",
		"Kochan",
		"Patrick",
		"Jonathan",
		"Jeremy"
	];

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = "";
	}

	$scope.removeStudent = function(i){
		$scope.dcClass.splice(i, 1);
	}
});