angular.module('blog').controller('blogCtrl', blogCtrl);

function blogCtrl($scope, $http){
    $scope.data = [];
    $http.get('app/data.json').then(function(res){
    	$scope.data = res.data;
    }, function(err){
    	console.log(err);
    });
}