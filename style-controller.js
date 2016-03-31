var angularStyle = angular.module("angularStyle", []);
angularStyle.controller("styleController", function($scope){

	$scope.myColor = "green";

	$scope.items = [
	{
		name: "Tristan",
		former: "Stock guy"
	},
	{
		name: "Josh",
		former: "iOS student"
	},
	{
		name: "Bogdan",
		former: "Mechanic"
	}
	];
	$scope.items.push(new Student("Lazlo", "KGB"));
	$scope.items.push(new Student("Kieth", "Geologist"));
	$scope.items.push(new Student("Will", "Skiing Ninja"));
	$scope.items.push(new Student("Curtis", "IT Master"));
	$scope.items.push(new Student("Joe", "The Controller"));
	$scope.items.push(new Student("Kochan", "Demon Deacon"));
	$scope.items.push(new Student("Patrick", "Outlaw"));
	$scope.items.push(new Student("Jonathan", "Boring Linguist"));
	$scope.items.push(new Student("Jeremy", "Magnum PI"));
});

var Student = function(name, former){
	this.name = name;
	this.former = former;
}

