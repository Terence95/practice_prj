var appModule = angular.module('app', []);

appModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div> Hi there </div>',
        replace: true
    };
});


appModule.directive('hello1', function() {
  return {
    restrict: 'E',
    template: '<div>Hi ter <span ng-transclude></span>',
    transclude: true,
    replace: true // 设置为true之后，hello1标签不见了
  };
});

appModule.directive('hello2', function() {
  return {
    restrict: 'E',
    template: '<span>Hi there</span>',
    replace: true
  };
});

appModule.controller('MyController', function($scope) {
  $scope.things = [1,2,3,4,5,6];
});
