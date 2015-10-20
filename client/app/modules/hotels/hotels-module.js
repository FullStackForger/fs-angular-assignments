'use strict';
angular
	.module('app.modules.hotels', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/hotels', {
			templateUrl: 'app/modules/hotels/hotels.html',
			controller: 'HotelsController'
		})
	});