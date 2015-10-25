'use strict';
describe('app.modules.bill billService', function() {
	var $httpBackend,
		service,
		serviceProvider,
		endpointUrl = 'http://some.fake.url';

	beforeEach(module('app.modules.bill', function(billServiceProvider) {
		serviceProvider = billServiceProvider;
		serviceProvider.setUrl(endpointUrl);
	}));

	beforeEach(inject(function($injector, billService) {
		$httpBackend = $injector.get('$httpBackend');
		service = billService;
	}));

	it('should configure correctly', function () {
		expect(service.url).toBe(endpointUrl);
	});

	it('should return valid data on success', function () {
		var dataMock = { success: true };
		$httpBackend.whenGET(endpointUrl).respond(dataMock);

		service
			.getBill()
			.then(function(data) {
				expect(data).toEqual(dataMock);
			});

		$httpBackend.flush();
	});

	it('should return error message on fail', function () {
		var dataMock = { success: true };
		$httpBackend.whenGET(endpointUrl).respond(400);

		service
			.getBill()
			.then(function() {}, function(error) {
				expect(error).toBe('Something went wrong. Try again later!');
			});

		$httpBackend.flush();
	});
});