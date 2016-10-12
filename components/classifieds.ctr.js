(function () {

	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function ($scope) {

			$scope.classifieds = [
				{
					"id": "1",
					"title": "20 Foot Equipment Trailer",
					"description": "2013 rainbow trailer 20 feet x 82 inch deck area.",
					"price": 6000,
					"posted": "2015-10-24",
					"contact": {
						"name": "John Doe",
						"phone": "(555) 555-5555",
						"email": "jongdoe@gmail.com"
					},
					"categories": [
						"Vehicles",
						"Parts and Accesories"
					],
					"image": "http://www.fancyicons.com/free-icons/214/container/png/256/cai_truck_256.png",
					"views": 123
				},
				{
					"id": "2",
					"title": "23 Foot Equipment Trailer",
					"description": "2014 rainbow trailer 20 feet x 82 inch deck area.",
					"price": 6500,
					"posted": "2015-10-24",
					"contact": {
						"name": "Oscar Huipa",
						"phone": "(555) 555-5552",
						"email": "oscarhuipa23@gmail.com"
					},
					"categories": [
						"Vehicles",
						"Parts and Accesories"
					],
					"image": "http://www.fancyicons.com/free-icons/214/container/png/256/cai_truck_256.png",
					"views": 123
				}
			]
			
		});
})();