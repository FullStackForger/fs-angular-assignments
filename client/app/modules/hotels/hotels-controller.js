angular
	.module("app.modules.hotels")
	.controller("HotelsController", HotelsController);

function HotelsController() {
	this.title = "Hotels Directory";
	console.log(this.hotels);
	this.hotels = [ {
		"Distance": 2.292091742299839,
		"EstablishmentId": 374814,
		"EstablishmentType": "Hotel",
		"Location": "Paris",
		"MinCost": 1402,
		"Name": "Le Littre",
		"Stars": 4,
		"UserRating": 8.4,
		"UserRatingTitle": "Great",
		"UserRatingCount": 23,
		"ImageUrl": "https://i.t-rp.co.uk/ei/3/7/4/8/1/4/0_400_400.jpg",
		"ThumbnailUrl": "https://i.t-rp.co.uk/ei/3/7/4/8/1/4/0_80_80.jpg"
	},
		{
			"Distance": 5.0292345498310445,
			"EstablishmentId": 118244,
			"EstablishmentType": "Hotel",
			"Location": "Paris",
			"MinCost": 1775.76,
			"Name": "Hotel Plaza Tour Eiffel",
			"Stars": 4,
			"UserRating": 8.5,
			"UserRatingTitle": "Excellent",
			"UserRatingCount": 96,
			"ImageUrl": "https://i.t-rp.co.uk/ei/1/1/8/2/4/4/0_400_400.jpg",
			"ThumbnailUrl": "https://i.t-rp.co.uk/ei/1/1/8/2/4/4/0_80_80.jpg"
		}];
}