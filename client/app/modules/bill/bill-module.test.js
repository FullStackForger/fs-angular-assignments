'use strict';

describe('app.modules.home module', function() {

	beforeEach(module('app.modules.home'));
	var route = '/home',
		templateUrl = 'app/modules/home/home.html';

	describe('auto routing', function() {
		it('should load the template', inject(function($route) {
			expect($route.routes[route].controller).toBeUndefined();
			expect($route.routes[route].templateUrl).toEqual(templateUrl);
		}));
	});

	describe('location change', function() {          git
		it('should load the template', inject(function($route, $location, $rootScope) {

			var $httpBackend;
			inject(function($injector) {
				$httpBackend = $injector.get('$httpBackend');
			});
			$httpBackend.whenGET(templateUrl).respond('<div></div>');

			expect($route.current).toBeUndefined();
			$location.path('/home');
			$rootScope.$digest();

			expect($route.current.templateUrl).toEqual(templateUrl);
			expect($route.current.controller).toBeUndefined();

		}));
	});
});