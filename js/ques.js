var angApp = angular.module('myApp',[]);

angApp.controller('myCtrl',function($scope,$http){
$scope.ques=[];

$http({method:'get',url:'json/ques.json'}).success(function(resp){
	$scope.ques = resp;
});

$scope.hider=true;
$scope.ind = 0;
$scope.c = 0

$scope.next = function(){

	if($scope.ques[$scope.ind].correct_answer===$scope.ques[$scope.ind].usel){
		$scope.c++;
	}

	if ($scope.ind < $scope.ques.length-1){
		$scope.ind++;
	}
	else{
		$scope.hider=false;
	}
}




});