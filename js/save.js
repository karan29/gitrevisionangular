var angApp = angular.module('myApp',[]);

angApp.controller('myCtrl',function($scope){


$scope.savings = [];


$scope.add = function(){	
	var temp = {};
	temp.name = $scope.planets;
	$scope.savings.push(temp);
	$scope.planets = '';
};



});