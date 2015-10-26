angular
	.module('app.modules.bill')
	.controller('BillController', BillController);

function BillController(billService) {
	var vm = this;
	init();

	function init() {
		vm.selection = 'subscriptions';

		billService
			.getBill()
			.then(parseBill, function (error) {
				vm.errorMessage = "Bill not available. Please contact SKY for details."
			});
	}

	function parseBill(bill) {
		vm.statement = bill.statement;
		vm.total = bill.total;
		vm.package = bill.package;
		vm.callCharges = bill.callCharges;
		vm.skyStore = bill.skyStore;
	}
}