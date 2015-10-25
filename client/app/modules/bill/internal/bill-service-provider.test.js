'use strict';

describe('app.modules.bill billDataProvider', function() {

	var service, serviceProvider;

	beforeEach(module('test.app.modules.bill', function(billDataProvider) {
		serviceProvider = billDataProvider;
	}));

	beforeEach(inject(function(billData)))
});