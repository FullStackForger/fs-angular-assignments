'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.views.view2',
	'myApp.views.view2',
	'myApp.modules.hotels',
	'myApp.version'
]).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);