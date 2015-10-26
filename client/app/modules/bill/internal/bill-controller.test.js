'use strict'
describe('app.modules.bill BillController', function () {

	var $controller, $q, $rootScope, billCtrl, mock;

	mock = {};
	mock.billDeferred = null;
	mock.billService = {
		getBill : function () {
			return mock.billDeferred.promise;
		}
	};
	mock.billData = {
		statement: { mocked: true  },
		total: 100,
		package: { mocked: true },
		callCharges: { mocked: true },
		skyStore: { mocked: true }
	};
	mock.resolveBillDeferred = function () {
		mock.billDeferred.resolve(mock.billData);
		$rootScope.$digest();
	};

	beforeEach(module('app'));
	beforeEach(inject(function(_$controller_, _$q_, _$rootScope_) {
		$controller = _$controller_;
		$q = _$q_;
		$rootScope = _$rootScope_;
		mock.billDeferred = $q.defer();
		billCtrl  = $controller('BillController', { billService: mock.billService });

	}));


	it('should auto retrieve and parse statement data', function () {
		expect(billCtrl.statement).toBeUndefined();
		mock.resolveBillDeferred();
		expect(billCtrl.statement).toBe(mock.billData.statement);
	});

	it('should auto retrieve and parse bill total', function () {
		expect(billCtrl.total).toBeUndefined();
		mock.resolveBillDeferred();
		expect(billCtrl.total).toBe(mock.billData.total);
	});

	it('should auto retrieve and parse package data', function () {
		expect(billCtrl.package).toBeUndefined();
		mock.resolveBillDeferred();
		expect(billCtrl.package).toBe(mock.billData.package);
	});

	it('should auto retrieve and parse callCharges data', function () {
		expect(billCtrl.callCharges).toBeUndefined();
		mock.resolveBillDeferred();
		expect(billCtrl.callCharges).toBe(mock.billData.callCharges);
	});

	it('should auto retrieve and parse callCharges data', function () {
		expect(billCtrl.skyStore).toBeUndefined();
		mock.resolveBillDeferred();
		expect(billCtrl.skyStore).toBe(mock.billData.skyStore);
	});
});