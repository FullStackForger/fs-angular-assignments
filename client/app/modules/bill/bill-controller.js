angular
	.module('app.modules.bill')
	.controller('BillController', BillController);

function BillController($http) {
	var vm = this;
	vm.selection = 'calls';

	$http
		.get('app/modules/bill/data/bill.json')
		//.get('https://still-scrubland-9880.herokuapp.com/bill.json')
		.then(parseBill, function (error) {
			vm.errorMessage = "Bill not available. Please contact SKY for details."
		});

	function parseBill(response) {
		vm.bill = response.data;
		vm.statement = vm.bill.statement;
		vm.total = vm.bill.total;
		vm.package = vm.bill.package;
		vm.callCharges = vm.bill.callCharges;
		vm.skyStore = vm.bill.skyStore;
	}
}