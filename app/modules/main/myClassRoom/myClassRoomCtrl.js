(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the app
	 */

	angular
		.module('codeEnjoy')
		.controller('MyClassRoomCtrl', myClassRoom)


	myClassRoom.$inject = ['homeService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function myClassRoom(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, codeEnjoy!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();


	}

})();


