var app = angular.module("myApp",['ngRoute','ngStorage']);
app.constant('urls', {
  BASE: 'http://localhost:8080/',
  USER_SERVICE_API : 'http://localhost:8080/api/user/'
});
app. config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true)
	$routeProvider
		.when("/home",{
			templateUrl:"../home.html",
			controller:"UserController",
			controllerAs:'ctrl',
	        resolve: {
	        	users: function ($q, UserService) {
	        		console.log('Load all users');
	                var deferred = $q.defer();
	                UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
	                return deferred.promise;
	           }
	        }
		})
		.when("/list",{
			templateUrl:"../list.html",
			controller:"HomeController"
		})
		.otherwise({
			redirectTo:"/home"
		})
})
//.controller("HomeController", function($scope,$rootScope){
//	$rootScope.title	= "SpringBoot Angular Tutorial"
//	$scope.message		= "Hello";
//	})
.controller("HomeController", function($scope){
	$scope.users = [
	    "A","B","C","D","E"              
	];
})

//var app = angular.module('myApp',['ui.router','ngStorage']); 
//app.constant('urls', {
//    BASE: 'http://localhost:8080/',
//    USER_SERVICE_API : 'http://localhost:8080/api/user/'
//});
// 
//app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
//    function($stateProvider, $urlRouterProvider,$locationProvider) {
// 
//        $stateProvider
//            .state('home', {
//                url: '/',
//                templateUrl: '../home.html',
//                controller:'UserController',
//                controllerAs:'ctrl',
//                resolve: {
//                    users: function ($q, UserService) {
//                        console.log('Load all users');
//                        var deferred = $q.defer();
//                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
//                        return deferred.promise;
//                    }
//                }
//            })
//            .state('list',{
//            	url:'/list',
//            	templateUrl: '../list.html',
//            	controller:'listController'            	
//            })
//        $locationProvider.html5Mode(true);
//        $urlRouterProvider.otherwise('/');
//    }]);