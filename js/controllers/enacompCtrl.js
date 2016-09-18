angular.module("enacomp",["ngRoute"]);

angular.module("enacomp").controller("headerCtrl", ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.gotoTop = function() {
		$location.hash('top');
		$anchorScroll();
    };
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

angular.module("enacomp").controller('contatoCtrl', function($scope) {

    $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
        	console.log($scope.user);
        }

    };

});