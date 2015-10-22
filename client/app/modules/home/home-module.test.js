'use strict';

describe('app.modules.home module', function() {

	beforeEach(module('app.modules.home'));

	describe('auto routing', function() {
		it('should load the template', inject(function($route) {
			expect($route.routes['/home'].controller).toBeUndefined();
			expect($route.routes['/home'].templateUrl).toEqual('app/modules/home/home.html');
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
			$location.path('/home');
			$rootScope.$digest();

			expect($route.current.templateUrl).toEqual('app/modules/home/home.html');
			expect($route.current.controller).toBeUndefined();

		}));
	});
});