angular
	.module('app.modules.bill', ['ngRoute'])
	.config(function($routeProvider, billServiceProvider) {
		$routeProvider.when('/bill', {
			templateUrl: 'app/modules/bill/bill.html',
			controller: 'BillController as billCtrl'
		});

		//billServiceProvider.setUrl('app/modules/bill/data/bill.json');
		billServiceProvider.setUrl('https://still-scrubland-9880.herokuapp.com/bill.json');
	});