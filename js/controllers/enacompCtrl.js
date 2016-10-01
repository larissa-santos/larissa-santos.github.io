angular.module("enacomp",["ngRoute", 'angular-loading-bar'])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
     // cfpLoadingBarProvider.includeBar = false;
 }]);

angular.module("enacomp").controller("headerCtrl", ['$scope', '$location', '$anchorScroll', 'cfpLoadingBar', function($scope, $location, $anchorScroll, cfpLoadingBar) {
    $scope.gotoTop = function() {
		$location.hash('top');
		$anchorScroll();
    };

    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    }

}]);

angular.module("enacomp").controller("tabsCtrl", ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);

angular.module("enacomp").controller('contatoCtrl', function($scope, $http) {

    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
        	console.log($scope.user);
        
	        $http({
				method: 'POST',
				url: 'requisicoes/sendEmail.php',
				data:  $.param($scope.user),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				console.log('ok'+response);
			    // this callback will be called asynchronously
			    // when the response is available
			}, function errorCallback(response) {
				console.log('erro'+response);
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			});
		}

    };

});