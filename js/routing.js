var myAng = angular.module('myApp',['ngRoute']);

myAng.controller('homeCtrl',function($scope){
	$scope.x = 'hello everyone';
});

myAng.controller('contactCtrl',function($scope){
$scope.x = 'bye everyone';
});

myAng.controller('bioCtrl',function($scope,$routeParams){
$scope.x = $routeParams.no;
});


myAng.config(function($routeProvider){
$routeProvider
.when('/home',{
	templateUrl : 'home.html',
	controller: 'homeCtrl'
})
.when('/contact', {
		template: '<h1>Hello This is contact page</h1>',
		controller: 'contactCtrl'	
	})
.when('/Bio/:no',{
	templateUrl : 'bio.html',
	controller : 'bioCtrl'
})
.otherwise({redirectTo:'/home'});
});