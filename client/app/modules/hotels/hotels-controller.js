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
}