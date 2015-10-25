angular
	.module('app.modules.bill')
	.provider('billService', BillServiceProvider);

function BillServiceProvider() {
	var dataUrl;

	this.setUrl = function (url) {
		dataUrl = url;
	};

	this.$get = function billServiceFactory ($http, $q) {
		return {
			getBill: getBill,
			url: dataUrl
		};

		function getBill () {
			var deferred = $q.defer();
			$http
				.get(dataUrl)
				.then(function (response) {
					deferred.resolve(response.data);
				}, function (error) {
					console.log(error);
					deferred.resolve('Something went wrong. Try again later!');
				});
			return deferred.promise;
		}
	}
}