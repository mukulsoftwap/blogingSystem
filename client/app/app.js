angular.module('blog',['ngRoute'])
.config(config)
.run(run);

function config($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'app/views/home.html',
        controller : 'blogCtrl'
    })
    .when('/inner',{
        templateUrl : 'app/views/inner.html',
        controller : 'innerCtrl'
    })
}

function run(){
    
}