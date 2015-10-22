angular
	.module('app.modules.home', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'app/modules/home/home.html'
		});
	});