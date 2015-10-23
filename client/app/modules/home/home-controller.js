angular
	.module('app.modules.home')
	.controller('HomeController', HomeController);

function HomeController($http) {
	var vm = this;
	vm.readmeRawURL = 'https://raw.githubusercontent.com/indieforger/fs-angular-assignments/master/README.md';
	vm.readmeURL = 'https://github.com/indieforger/fs-angular-assignments/blob/master/README.md';
	vm.parserURL = 'https://github.com/showdownjs/ng-showdown';


	$http
		.get(vm.readmeRawURL)
		.then(handleResponse, handleError);

	function handleResponse(response) {
		vm.content = response.data;
	}

	function handleError(error) {
		vm.content = 'Something went wrong. Try again later!'
	}
}