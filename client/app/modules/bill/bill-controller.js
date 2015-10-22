angular
	.module('app.modules.bill')
	.controller('BillController', BillController);

function BillController($http) {
	var vm = this;

	$http
		//.get('app/data/bill.json')
		.get('https://still-scrubland-9880.herokuapp.com/bill.json')
		.then(function (response) {
			vm.bill = response.data;
		}, function (error) {
			vm.errorMessage = "Bill not available. Please contact SKY for details."
		});
}