
var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){

	$scope.labs = [
		"https://amerikennels.files.wordpress.com/2009/12/11-9-09-white-and-chocolate.jpg",
		"http://www.hd-wallpapersdownload.com/tpl/download.php?filename=chocolate-lab-puppy-photos-wallpaper-800x600.jpg",
		"http://i43.photobucket.com/albums/e371/Pro-Mo/003-6.jpg",
		"http://www.hd-freewallpapers.com/tpl/download.php?filename=chocolate-lab-puppy-photos-800x600.jpg",
		"http://thelabradorchocolate.weebly.com/uploads/2/6/6/5/26653029/5464639_orig.jpg",
		"http://www.hd-freewallpapers.com/tpl/download.php?filename=hd-chocolate-lab-puppy-photos-800x600.jpg",
		"https://wallpaperscraft.com/image/labrador_retriever_dogs_puppies_couple_96109_800x600.jpg",
		"http://data.1freewallpapers.com/download/quiet-chocolate-lab-800x600.jpg",
		"http://data.1freewallpapers.com/download/cute-labrador-puppy-800x600.jpg",
		"http://cdn.allwallpaper.in/wallpapers/800x600/4877/labrador-puppy-800x600-wallpaper.jpg",
		"https://thearkanimalrescue.files.wordpress.com/2012/04/choc_lab.jpg"
	]
	 $scope.makeImage = function(index){
		console.log(index);
		$scope.currImage = $scope.labs[index];
	}
});

