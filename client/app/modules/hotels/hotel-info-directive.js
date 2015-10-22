angular
	.module('app.modules.hotels')
	.directive('hotelInfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/hotels/hotel-info.tpl.html'
		};
	});