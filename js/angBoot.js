var angApp = angular.module('myApp',[]);

angApp.controller('myCtrl',function($scope,$http){
$scope.products = [];
$http({method:'get',url:'json/data.json'}).success(function(resp){
	$scope.products = resp;
});

//$scope.val = false;
$scope.amount = 0;

$scope.buy = function(){
$scope.val = true;
for(var i=0;i<$scope.products.length;i++){
	var temp = ($scope.products[i].price*$scope.products[i].qty);
	$scope.amount = temp+$scope.amount;
}

}

});