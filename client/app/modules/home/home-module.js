angular
	.module('app.modules.home', ['ngRoute', 'ng-showdown'])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'app/modules/home/home.html',
			controller: 'HomeController as vm'
		});
	});