angular.module("enacomp",["ngRoute", 'angular-loading-bar'])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
     // cfpLoadingBarProvider.includeBar = false;
 }]);

angular.module("enacomp").controller("headerCtrl", ['$scope', '$location', '$anchorScroll', 'cfpLoadingBar', function($scope, $location, $anchorScroll, cfpLoadingBar) {
    $scope.gotoTop = function() {
		  $location.hash('top');
		  $anchorScroll();
      // $('.navbar-toggle').removeClass('collapsed');
      
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