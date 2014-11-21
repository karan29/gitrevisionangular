var angApp = angular.module('myApp',[]);

angApp.controller('myCtrl',function($scope){
$scope.x = {'name':'karan'};
$scope.y = ['Karan Sawhney','IT','Web Development'];

$scope.z = ['blue','orange','purple','black','grey'];
$scope.remove = function(a){
$scope.z.splice(a,1);
}

$scope.click = function(){
	alert('hello');
}
});

angApp.controller('secondCtrl',function($scope){
$scope.products = [
{'name':'milk','price':2.99,'quantity':1},
{'name':'bread','price':3.99,'quantity':2},
{'name':'eggs','price':4.99,'quantity':3},
{'name':'juices','price':5.99,'quantity':4}
]

$scope.x = 2;

$scope.pages = function(a){
$scope.x = a;
}
});

angApp.controller('thirdCtrl',function($scope){
$scope.image = 'images/red.png';

$scope.traffic = function(a){
$scope.image = 'images/'+a+'.png';
}

$scope.products = [
{'name':'milk','price':2.99,'quantity':1},
{'name':'bread','price':3.99,'quantity':2},
{'name':'eggs','price':4.99,'quantity':3},
{'name':'juices','price':5.99,'quantity':4}
]
});

angApp.filter('capitalize',function(){
var temp = function(input){
	var x = input;
	return x.substring(0,1).toUpperCase()+input.substring(1);
}
return temp;
});

angApp.filter('greetings',function(){
var temp = function(input){
	var x = 'Hello' +' '+ input;
	return x;
}
return temp;
});


angApp.controller('fourthCtrl',function($scope){
$scope.products = [
{'name':'milk','price':2.99,'quantity':1},
{'name':'bread','price':3.99,'quantity':2},
{'name':'eggs','price':4.99,'quantity':3},
{'name':'juices','price':5.99,'quantity':4}
]

$scope.del = function(a){
	$scope.products.splice(a,1);
}


$scope.adder = function(){
var temp = {};
temp.name = $scope.pname;
temp.price = $scope.pprice;
temp.quantity = $scope.pquan;
$scope.products.push(temp);
$scope.pname = '';
$scope.pprice = '';
$scope.pquan = '';
}


$scope.edit = function(a){
$scope.pname = $scope.products[a].name;
$scope.pprice = $scope.products[a].price;
$scope.pquan = $scope.products[a].quantity;
$scope.del(a);
}
});