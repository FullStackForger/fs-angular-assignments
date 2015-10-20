'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'ui.bootstrap',
	'app.modules.hotels'
]).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.otherwise({
				redirectTo: '/hotels'
			});
	}]);