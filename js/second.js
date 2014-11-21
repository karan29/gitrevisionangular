var myAng = angular.module('myApp',[]);

myAng.controller('frstCtrl',function($scope,$http){
$scope.products = [];

$scope.getData = function(){
	$http({method:'get', url:'json/first.json'}).success(function(resp){
		$scope.products = resp;
	})
}
});


myAng.controller('secondCtrl',function($scope,maths){
$scope.x = maths.cube(3);
});

myAng.controller('thirdCtrl',function($scope,maths){
$scope.x = maths.multiply(4,5);
});

myAng.controller('fourthCtrl',function(tracker,maths,$scope){
	tracker.sold();
	$scope.y = tracker.checkAvail();
	$scope.x = maths.add(6,6);

});


myAng.factory('maths',function(){
	return{
		cube: function(a){
			return a*a*a;
		},

		multiply: function(a,b){
			return a*b
		},

		add : function(a,b){
			return a+b;
		}
	}
});

myAng.service('tracker',function(){
	this.available=35;
	this.sold=function(a){
	this.available--;
	};
	this.checkAvail=function(){
	return this.available;
	};
});



myAng.controller('todoCtrl',function($scope){

$scope.pending = ['car wash'];
$scope.completed = ['groceries','assignments','cooking'];

$scope.add = function(){
$scope.pending.push($scope.new_task);
$scope.new_task = '';
}

$scope.transfer = function(a){
var temp = $scope.pending.splice(a,1);
$scope.completed.push(temp[0]);
}


$scope.utran = function(a){
var tef = $scope.completed.splice(a,1);
$scope.pending.push(tef[0]);
}


$scope.del = function(a,b){
if(b==true){
	$scope.pending.splice(a,1);
}
else{
	$scope.completed.splice(a,1);
}
}

});