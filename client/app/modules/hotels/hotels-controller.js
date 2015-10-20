angular
	.module("app.modules.hotels")
	.controller("HotelsController", HotelsController);

function HotelsController($http) {
	var vm = this;

	$http({
		method: 'GET',
		url: '/app/data/hotels.json'
	}).then(function successCallback(response) {
		vm.hotels = response.data.Establishments;
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

	vm.resetFilter = function () {
		vm.filter = {};
	};

	vm.predicate = 'Stars';
	vm.reverse = true;
	vm.filter = '';
	vm.filterType ='$';
	vm.filterTypes = [
		{type: '$', name: 'Any'},
		{type: 'Name', name: 'Name'},
		{type: 'Stars', name: 'Stars'},
		{type: 'UserRating', name: 'Average Rating'},
		{type: 'MinCost', name: 'Minimum Cost'}
	];


	vm.order = function(predicate) {
		vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
		vm.predicate = predicate;
	};
}