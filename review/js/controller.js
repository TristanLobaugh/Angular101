var viewsApp = angular.module("viewsApp", ["ngRoute", "ngAnimate", "ngCookies", "LocalStorageModule"]);

viewsApp.config(function($routeProvider){
	$routeProvider.when("/:template",{
		controller: "viewsController",
		templateUrl: function($routeParams){
			return "template" + $routeParams.template + ".html";
		// simple version
		// templateUrl: "template0.html"	
		}
	});
	// $routeProvider.when("/:param1/:param2",{
	// 	controller: "viewsController",
	// 	templateUrl: function($routeParams){
	// 		return "template" + $routeParams.param2 + ".html";
	// 	}
	// });
	$routeProvider.otherwise({
		redirectTo: "/0"
	});
})

viewsApp.controller("viewsController", function($scope, $location, localStorageService){

	localStorageService.set("myGolfer", "ZachJohnson");
	console.log(localStorageService.get("myGolfer"));

	$scope.nextId = function(id){
		$location.path(id);
	}
});

// FOR COOKIES
// viewsApp.controller("viewsController", [
//  '$scope', '$location', '$http', '$cookieStore', 
//  function ($scope, $location, $http, $cookieStore) {
//   	var myGolfer = $cookieStore.get('myGolfer');
//   	console.log(myGolfer);
// 	console.log($cookieStore);
// 	$cookieStore.put('myGolfer','Zach');
// 	console.log($cookieStore);
// ​
// 	$scope.nextId = function(id){
// 		console.log(id);
// 		$location.path("/"+id);
// 	}
// }]);