angular
	.module('app.modules.bill')
	//.module('app.modules.bill.billDetails', [])
	.directive('billDetails', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/bill/internal/bill-details-directive.tpl.html',
			scope: {
				labels: '=',
				dataset: '=',
				fields: '=',
				total: '='
			},
			replace: false
		};
	});