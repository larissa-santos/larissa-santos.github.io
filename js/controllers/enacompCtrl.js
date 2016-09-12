angular.module("enacomp",["ngRoute"]);
angular.module("enacomp").controller("headerCtrl", function($scope){
	$scope.message = "Olá mundo";
});

angular.module("enacomp").controller("tabsCtrl", ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);