angular
	.module('app.modules.bill', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/bill', {
			templateUrl: 'app/modules/bill/bill.html',
			controller: 'BillController',
		})
	});