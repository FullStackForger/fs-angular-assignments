'use strict';

describe('app.modules.home module', function() {

	var moduleRoute = '/home',
		templateUrl = 'app/modules/home/home.html',
		controllerStr = 'HomeController as vm';

	beforeEach(module('app.modules.home'));

	describe('auto routing', function() {
		it('should load the template', inject(function($route) {
			expect($route.routes[moduleRoute].controller).toEqual(controllerStr);
			expect($route.routes[moduleRoute].templateUrl).toEqual(templateUrl);
		}));
	});

	describe('location change', function() {
		it('should load the template', inject(function($route, $location, $rootScope) {

			var $httpBackend;
			inject(function($injector) {
				$httpBackend = $injector.get('$httpBackend');
			});
			$httpBackend.whenGET('app/modules/home/home.html').respond('<div></div>');

			expect($route.current).toBeUndefined();
			$location.path(moduleRoute);
			$rootScope.$digest();

			expect($route.current.templateUrl).toEqual(templateUrl);
			expect($route.current.controller).toEqual(controllerStr);
		}));
	});
});