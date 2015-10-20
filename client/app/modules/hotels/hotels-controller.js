angular
	.module("app.modules.hotels")
	.controller("HotelsController", HotelsController);

function HotelsController($http, $filter, $timeout) {
	var vm = this;

	$http({
		method: 'GET',
		url: '/app/data/hotels.json'
	}).then(function successCallback(response) {
		vm.hotels = response.data.Establishments;
		vm.hotels.forEach(function(hotel) {
			var i, stars = '';
			for (i = 0; i < hotel.Stars; i++) {
				stars += '*';
			}
			hotel.StarsString = stars;
		});
		vm.hotelsData = vm.hotels;
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

	vm.resetFilter = function () {
		vm.filter = {};
	};

	var timer;
	vm.updateFilter = function () {
		$timeout.cancel(timer);
		timer = $timeout(updateHotels, 500);
	};

	function updateHotels() {
		vm.hotels = $filter('filter')(vm.hotelsData, vm.filter);
	}

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