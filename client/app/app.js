'use strict';
angular.module('app', [
	'ngRoute',
	'ui.bootstrap',
	'app.modules.home',
	'app.modules.hotels',
	'app.modules.bill'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/home'
		});
}]);